import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>Custom App!</div>
  )
}

// const reactElement ={
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   children:'Click me visit google '
// }


const anotherElement =(
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const reactElement =React.createElement(
  'a',
  {href:"https://google.com" ,target:"_blank"},
  'click me to visit google'
)
createRoot(document.getElementById('root')).render(
//  <MyApp />
// reactElement
// anotherElement
<App />
)
