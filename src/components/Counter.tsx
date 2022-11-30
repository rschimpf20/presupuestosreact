import Title from "./Title"

interface Props {
  show: number
}
export default function Counter({show}: Props) {
  return (
    <Title>Current count is {show}</Title>
  )
}