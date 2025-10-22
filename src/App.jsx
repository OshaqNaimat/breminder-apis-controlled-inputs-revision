import React from 'react'
import Bday from "./birthdayreminder/Bday"
import Api from './apis/Api'
import Sapi from './apis/Sapi'
import Useref from './Useref/Useref'
import Usereducer from './Usereducer/Usereducer'
import Conuter from './Usereducer/Conuter'
import Drilling from './drilling/Drilling'
import Home from './pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from './pages/About'

const App = () => {
  return (
    <>
    {/* <Bday/> */}
    {/* <Api/> */}
    {/* <Sapi/> */}
     {/* <Useref/> */}
     {/* <Usereducer/> */}
     {/* <Conuter/> */}
    {/* <Drilling/> */}
    {/* <Home/> */}

    <Router>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App