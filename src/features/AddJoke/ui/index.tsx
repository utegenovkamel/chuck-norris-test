import React from 'react'

import { fetchRandomJoke } from 'entities/Joke'
import { useAppDispatch } from 'shared/lib/hooks'
import { Button } from 'shared/UI'

export const AddJokeButton = () => {
  const dispatch = useAppDispatch()

  const onAddRandomJoke = () => {
    dispatch(fetchRandomJoke())
  }

  return <Button onClick={onAddRandomJoke}>Add a random joke</Button>
}
