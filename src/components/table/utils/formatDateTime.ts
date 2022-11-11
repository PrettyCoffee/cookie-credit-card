const padLeft = (value: number) => String(value).padStart(2, "0")
export const formatDateTime = (value: Date) => {
  const date = [value.getFullYear(), value.getMonth() + 1, value.getDate()]
    .map(padLeft)
    .join("-")

  const time = [value.getHours(), value.getMinutes()].map(padLeft).join(":")

  return {
    date,
    time,
    dateTime: `${date}, ${time}`,
  }
}
