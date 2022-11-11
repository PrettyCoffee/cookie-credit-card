import { createContext } from "preact"
import { useContext } from "preact/hooks"

import { PropsWithChildren } from "../components"
import { useStorage } from "./utils"

type State = [number, (value: number) => void]

const Context = createContext<State>([0, () => null])

export const CookieProvider = ({ children }: PropsWithChildren) => {
  const state = useStorage("ccc-cookies", 0)
  return <Context.Provider value={state}>{children}</Context.Provider>
}

export const useCookies = () => useContext(Context)
