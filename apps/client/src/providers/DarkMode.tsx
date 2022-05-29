import { PropsWithChildren } from "@ccc/components"
import { createContext, useContext } from "react"

import { useStorage } from "./auth/utils"

type State = [boolean, () => void]

const Context = createContext<State>([false, () => null])

export const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useStorage("ccc-dark-mode", false)

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <Context.Provider value={[darkMode, toggleDarkMode]}>
      {children}
    </Context.Provider>
  )
}

export const DarkModeConsumer = Context.Consumer

export const useDarkMode = () => useContext(Context)
