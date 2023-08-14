import { useState } from 'react'
import './App.css'
import Header from './header'
import MainContent from './mainContent'
import FiveBoxes from './fiveBoxes'
import NewArrivals from './newArrivals'

function App() {
  

  return (
    <>
     
        <Header/> 
        <MainContent/>
        <FiveBoxes />
        <NewArrivals/>
    </>
  )
}

export default App
