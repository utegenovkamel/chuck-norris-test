import { useEffect } from 'react'

import { saveLikedJokesToStore } from 'entities/Joke'
import { useAppDispatch } from 'shared/lib/hooks'

export const useSaveLocalStorageDataToStore = () => {
  const dispatch = useAppDispatch()
  const likedJokesData = JSON.parse(localStorage.getItem('likedJokes') || '[]')

  useEffect(() => {
    dispatch(saveLikedJokesToStore(likedJokesData))
  }, [])
}
