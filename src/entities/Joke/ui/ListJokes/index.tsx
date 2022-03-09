import React from 'react'

import { LikeJoke } from 'features/LikeJoke'
import { useAppSelector } from 'shared/lib/hooks'
import { Box, Loader, Typography } from 'shared/UI'

import { JokeCard } from '../JokeCard'
import { Container } from './styled'

export const ListJokes = () => {
  const { jokes, isLoading, error } = useAppSelector((state) => state.jokes)

  return (
    <>
      {jokes.length === 0 && (
        <Box justifyContent="center">
          <Typography>Need to add jokes</Typography>
        </Box>
      )}

      {jokes.length > 0 && (
        <Container>
          {jokes.map((joke) => {
            return (
              <JokeCard
                key={joke.id}
                likeJoke={<LikeJoke isLiked={joke.isLiked} id={joke.id} />}>
                {joke.value}
              </JokeCard>
            )
          })}
        </Container>
      )}

      {error && <Typography>{error}</Typography>}
      {isLoading && <Loader center />}
    </>
  )
}
