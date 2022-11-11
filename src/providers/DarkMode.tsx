import { createContext } from "preact"
import { useContext } from "preact/hooks"

import { PropsWithChildren } from "../components"
import { useStorage } from "./utils"

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
