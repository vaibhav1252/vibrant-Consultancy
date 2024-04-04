import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Registration from './components/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login /> */}
      <Registration />
    </>
  )
}

export default App
