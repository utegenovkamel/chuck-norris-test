export const connector = {
  get: async <TData>(url: string): Promise<TData> => {
    try {
      const response = await fetch(url)
      const data: TData = await response.json()
      return data
    } catch (error) {
      throw new Error()
    }
  },
}
