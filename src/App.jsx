import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Support from './pages/Support'
import Contacts from './pages/Contacts'
import Advertising from './pages/Advertising'
import Rules from './pages/Rules'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/advertising' element={<Advertising/>}/>

        <Route path='/rules' element={<Rules/>}/>


        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App