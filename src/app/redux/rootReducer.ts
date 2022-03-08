import { combineReducers } from '@reduxjs/toolkit'

import { jokesSlice } from 'entities/Joke/'

export const rootReducer = combineReducers({
  jokes: jokesSlice.reducer,
})
