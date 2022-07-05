const dataAsString = <Data extends object>(data: Data) =>
  Object.values(data).join(";")

export const filterData = <Data extends object>(data: Data[], value: string) =>
  data.filter(data => dataAsString(data).includes(value))
