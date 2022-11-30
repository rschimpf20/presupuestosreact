import { PropsWithChildren } from "react"

interface Props {
  primary?: boolean
  secondary?: boolean
}

export default function NuevoButton({ children, primary = false, secondary = false }: PropsWithChildren<Props>){
  return(
    <button className={[
        'rounded-lg font-bold w-40 h-10 duration-200 hover:shadow-lg hover:-translate-y-1',
        primary ? 'bg-blue-600 text-white' : '',
        secondary ? 'bg-red-600' : '',
        !primary && !secondary ? 'bg-white' : ''
      ].join(' ')}>
      {children}
    </button>
  )
}