import React from 'react'

import { LikeJoke } from 'features/LikeJoke'
import { useAppSelector } from 'shared/lib/hooks'
import { Box, Typography } from 'shared/UI'

import { JokeCard } from '../JokeCard'
import { Container } from './styled'

export const ListLikedJokes = () => {
  const { likedJokes } = useAppSelector((state) => state.jokes)

  return (
    <>
      {likedJokes.length === 0 && (
        <Box justifyContent="center">
          <Typography>There are no liked jokes</Typography>
        </Box>
      )}
      {likedJokes.length > 0 && (
        <Container flexWrap="wrap">
          {likedJokes.map((joke) => {
            return (
              <JokeCard key={joke.id} likeJoke={<LikeJoke isLiked id={joke.id} />}>
                {joke.value}
              </JokeCard>
            )
          })}
        </Container>
      )}
    </>
  )
}
