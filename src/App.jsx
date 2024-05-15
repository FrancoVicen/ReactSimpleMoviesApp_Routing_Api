import { useState } from 'react'
import { MyRoutes } from './routers/MyRoutes'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1 className='title'>Películas</h1>
      </header>
      <MyRoutes/>
    </>
    
  )
}

export default App
