import React from 'react'

import { ListLikedJokes } from 'entities/Joke'
import { DeleteAllLiedJokes } from 'features/DeleteAllLikedJokes'

export const LikedJokesPage = () => {
  return (
    <>
      <DeleteAllLiedJokes />
      <ListLikedJokes />
    </>
  )
}
