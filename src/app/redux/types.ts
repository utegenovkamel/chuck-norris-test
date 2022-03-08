import { Reducer } from '@reduxjs/toolkit'

import { JokesType } from 'shared/API'

export type RootStoreType = {
  jokes: JokesType[]
}

export type RootReducerType = Record<keyof RootStoreType, Reducer>
