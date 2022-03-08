import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { JokesType } from 'shared/API/jokes'

import {
  deleteDataToLocalStorageArray,
  deleteFirstItemFromLocalStorageArray,
  saveDataToLocalStorageArray,
} from '../lib'
import {
  deleteAllLikedJokes,
  dislikeJoke,
  fetchRandomJoke,
  likeJoke,
  saveLikedJokesToStore,
} from './actionCreators'

type JokesState = {
  jokes: JokesType[]
  likedJokes: JokesType[]
  isLoading: boolean
  error: string
}

const initialState: JokesState = {
  jokes: [],
  likedJokes: [],
  isLoading: false,
  error: '',
}

export const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteAllLikedJokes, (state) => {
      state.likedJokes = []
      state.jokes.forEach((joke) => {
        joke.isLiked = false
      })
      localStorage.removeItem('likedJokes')
    })
    builder.addCase(saveLikedJokesToStore, (state, action) => {
      state.jokes = action.payload
      state.likedJokes = action.payload
    })

    builder.addCase(likeJoke, (state, action) => {
      const joke = state.jokes.find((joke) => joke.id === action.payload) as JokesType
      let countLikedJokes = state.likedJokes.length

      if (joke?.isLiked) {
        countLikedJokes--
      } else {
        countLikedJokes++
      }

      if (countLikedJokes > 10) {
        state.likedJokes.shift()

        const firstJoke = state.jokes.find((joke) => joke.isLiked === true)
        if (firstJoke) {
          firstJoke.isLiked = false
        }
        deleteFirstItemFromLocalStorageArray('likedJokes')
      }

      joke!.isLiked = true
      state.likedJokes.push(joke)
      saveDataToLocalStorageArray<JokesType>('likedJokes', joke)
    })

    builder.addCase(dislikeJoke, (state, action) => {
      const joke = state.jokes.find((joke) => joke.id === action.payload) as JokesType

      joke!.isLiked = false
      deleteDataToLocalStorageArray('likedJokes', joke.id)
      const likedJokeIndex = state.likedJokes.findIndex(
        (likedJoke) => likedJoke.id === action.payload,
      )
      if (likedJokeIndex !== -1) {
        state.likedJokes.splice(likedJokeIndex, 1)
      }
    })

    builder.addCase(fetchRandomJoke.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(
      fetchRandomJoke.fulfilled,
      (state, action: PayloadAction<JokesType>) => {
        state.isLoading = false
        state.error = ''

        state.jokes.push(action.payload)
      },
    )

    builder.addCase(fetchRandomJoke.rejected, (state, action) => {
      state.isLoading = false
      if (action.error.message) {
        state.error = action.error.message
      }
    })
  },
})
