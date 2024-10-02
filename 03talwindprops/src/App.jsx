import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    username :"Deepanshu",
    age:22
  }
  let newArray =[1,2,3,4,5,6]
  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl p-4 mb-10'>Talwind test</h1 >
    <Card username="chai or code" someObj ={newArray}/>
    <Card  username="Deepanshu"/>
    </>
  )
}

export default App
