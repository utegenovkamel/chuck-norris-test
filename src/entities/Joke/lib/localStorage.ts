import { JokesType } from 'shared/API'

export const saveDataToLocalStorageArray = <TData>(
  localStorageKey: string,
  data: TData,
) => {
  const localStorageData = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  localStorageData.push(data)
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData))
}

export const deleteDataToLocalStorageArray = (localStorageKey: string, id: string) => {
  const localStorageData = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  const newData = localStorageData.filter((data: JokesType) => data.id !== id)

  localStorage.setItem(localStorageKey, JSON.stringify(newData))
}

export const deleteFirstItemFromLocalStorageArray = (localStorageKey: string) => {
  const localStorageData = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  localStorageData.shift()

  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData))
}
