interface Props {
  add: () => void
}

export default function CounterButton({ add }: Props) {
  return (
    <button className="p-2 bg-gray-200 rounded-lg font-extrabold w-20 duration-200 hover:shadow-lg hover:-translate-y-1" onClick={add}>+</button>
  )
}