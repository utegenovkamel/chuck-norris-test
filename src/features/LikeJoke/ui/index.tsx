import React from 'react'

import { dislikeJoke, likeJoke } from 'entities/Joke'
import { JokesType } from 'shared/API'
import { useAppDispatch } from 'shared/lib/hooks'
import { theme } from 'shared/theme'
import { Icon } from 'shared/UI'

type Props = Pick<JokesType, 'isLiked' | 'id'>

export const LikeJoke = ({ isLiked, id: jokeId }: Props) => {
  const dispatch = useAppDispatch()
  const onLikeJoke = () => {
    if (isLiked) {
      dispatch(dislikeJoke(jokeId))
    } else {
      dispatch(likeJoke(jokeId))
    }
  }

  return (
    <Icon
      type="heart"
      onClick={onLikeJoke}
      color={isLiked ? theme.palette.primary : theme.palette.default}
      isPointer
    />
  )
}
