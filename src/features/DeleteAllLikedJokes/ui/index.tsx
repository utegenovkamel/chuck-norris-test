import React from 'react'

import { deleteAllLikedJokes } from 'entities/Joke'
import { useAppDispatch } from 'shared/lib/hooks'
import { Button } from 'shared/UI'

export const DeleteAllLiedJokes = () => {
  const dispatch = useAppDispatch()

  const onDeleteLikedJokes = () => {
    dispatch(deleteAllLikedJokes())
  }

  return (
    <Button onClick={onDeleteLikedJokes} width="100%" mb="1rem">
      Delete all jokes you like
    </Button>
  )
}
