import { PropsWithChildren } from "react";

export default function Title({ children }: PropsWithChildren) {
  return (
    <h1 className="text-emerald-800 my-4 text-3xl font-extrabold">{children}</h1>
  )
}