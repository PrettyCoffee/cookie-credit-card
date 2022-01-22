import { ComponentChildren } from "preact"

export type PropsWithChildren<Props = unknown> = Props & {
  children: ComponentChildren
}
