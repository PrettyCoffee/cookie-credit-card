import { useState, useCallback } from "react"

const STORAGE = window.localStorage

export const parseStorageItem = <ValueType>(key: string) => {
  const stringValue = STORAGE.getItem(key)
  if (stringValue == null) return null

  try {
    return JSON.parse(stringValue) as ValueType
  } catch {
    return null
  }
}

const initiateStorage = <ValueType>(key: string, initialValue: ValueType) => {
  const value = parseStorageItem<ValueType>(key)

  if (value === null) {
    STORAGE.setItem(key, JSON.stringify(initialValue))
    return initialValue
  }

  return value
}

export const useStorage = <ValueType>(
  key: string,
  initialValue: ValueType
): [ValueType, (value: ValueType) => void] => {
  const [value, setValue] = useState(initiateStorage(key, initialValue))

  const setStorage = useCallback(
    (value: ValueType) => {
      STORAGE.setItem(key, JSON.stringify(value))
      setValue(value)
    },
    [key]
  )

  return [value, setStorage]
}
