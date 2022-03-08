import React, { FC, ReactElement } from 'react'

import { Box, Typography } from 'shared/UI'

type Props = {
  likeJoke: ReactElement
}

export const JokeCard: FC<Props> = ({ children, likeJoke }) => {
  return (
    <Box justifyContent="space-between" alignItems="center">
      <Typography>{children}</Typography>
      {likeJoke}
    </Box>
  )
}
