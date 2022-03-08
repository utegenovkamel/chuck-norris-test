import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

import { requestRandomJoke } from 'shared/API'
import { JokesType } from 'shared/API/jokes'

const domainName = 'jokes'

export const deleteAllLikedJokes = createAction(`${domainName}/deleteAllLikedJokes`)

export const likeJoke = createAction<string>(`${domainName}/likeJoke`)

export const dislikeJoke = createAction<string>(`${domainName}/dislikeJoke`)

export const saveLikedJokesToStore = createAction<JokesType[]>(
  `${domainName}/saveLikedJokesToStore`,
)

export const fetchRandomJoke = createAsyncThunk(
  `${domainName}/fetchRandom`,
  async (_, thunkAPI) => {
    try {
      const data = await requestRandomJoke()
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue('Oops! Something went wrong.')
    }
  },
)
