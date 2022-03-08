import { connector } from '../lib'
import { JokesType } from './types'

export const requestRandomJoke = async (): Promise<JokesType> => {
  return await connector.get<JokesType>('https://api.chucknorris.io/jokes/random')
}
