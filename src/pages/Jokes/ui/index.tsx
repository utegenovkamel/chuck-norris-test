import React from 'react'

import { ListJokes } from 'entities/Joke'
import { AddJokeButton } from 'features/AddJoke'
import { IntervalJokeButton } from 'features/IntervalJoke'
import { Flex } from 'shared/UI'

import { Container } from './styled'

export const JokesPage = () => {
  return (
    <Container>
      <Flex justifyContent="space-between" mb="1.5rem" flexWrap="wrap">
        <IntervalJokeButton />
        <AddJokeButton />
      </Flex>
      <ListJokes />
    </Container>
  )
}
