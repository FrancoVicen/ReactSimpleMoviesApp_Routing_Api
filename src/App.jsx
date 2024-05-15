import { useState } from 'react'
import { MyRoutes } from './routers/MyRoutes'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1 className='title'><a className='a-title' href="/">Movie Yard</a></h1>
      </header>
      <MyRoutes/>
    </>

  )
}

export default App
