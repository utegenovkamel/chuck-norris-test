import React, { useEffect, useRef, useState } from 'react'

import { requestRandomJoke } from 'shared/API'
import { Button } from 'shared/UI'

export const IntervalJokeButton = () => {
  const refIntervalId = useRef<number | null>(null)
  const [intervalJoke, setIntervalJoke] = useState('Interval')

  const onToggleInterval = () => {
    const oldIntervalId = refIntervalId.current

    if (oldIntervalId) {
      clearInterval(oldIntervalId)
      refIntervalId.current = null
    } else {
      const intervalId = setInterval(async () => {
        const data = await requestRandomJoke()
        setIntervalJoke(data.value)
      }, 3000)
      refIntervalId.current = intervalId
    }
  }

  useEffect(() => {
    onToggleInterval()
    return () => {
      if (refIntervalId.current) {
        clearInterval(refIntervalId.current)
      }
    }
  }, [])

  return (
    <Button maxWidth="50%" onClick={onToggleInterval}>
      {intervalJoke}
    </Button>
  )
}
