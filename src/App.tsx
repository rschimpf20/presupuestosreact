import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'  
import CounterButton from './components/CounterButton'
import Counter from './components/Counter'
import Title from './components/Title'
import NuevoButton from './components/NuevoButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto flex flex-col items-center bg-slate-100">
      <div>
        
      </div>
      
      <div className="card">
        <Title>{"Bienvenido Ronald"} </Title>        
        <NuevoButton texto={"Nuevo Pago"}/>
        <NuevoButton texto={"Ver mis pagos"}/>
        
      </div>
      
    </div>
  )
}

export default App
