const formatDate = (date: Date) => date.toISOString().slice(0, 10)

const getNow = () => formatDate(new Date())

export const getNewAuthDate = () => {
  const dateObj = new Date()
  dateObj.setDate(dateObj.getDate() + 1)
  return formatDate(dateObj)
}

export const isExpired = (expires: string) => expires <= getNow()
