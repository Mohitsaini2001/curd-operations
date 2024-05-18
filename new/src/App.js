import React from 'react'
import UserCreate from './Pages/UserCreate'
import UserRead from './Pages/UserRead'
import UserSearch from './Pages/UserSearch'
import UserUpdate from './Pages/UserUpdate'
import Home from './Pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './Comman/Menu'
import Header from './Comman/Header'
import Footer from './Comman/Footer'

function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Menu/>
     <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/create' element={<UserCreate/>}/>
<Route path='/read' element={<UserRead/>}/>
<Route path='/update/:id' element={<UserUpdate/>}/>
<Route path='/search' element={<UserSearch/>}/>

     </Routes>
     <Footer/>
     
     </BrowserRouter>
    </>
  )
}
 
export default App
