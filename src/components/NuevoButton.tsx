interface Props {
  texto: String
}

export default function NuevoButton({texto}: Props){
  return(
    <button className="bg-white rounded-lg font-bold w-40 h-10 duration-200 hover:shadow-lg hover:-translate-y-1">{texto}</button>
  )
  

}