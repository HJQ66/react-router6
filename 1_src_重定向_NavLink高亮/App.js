import React from 'react'
import Header from './components/Header'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import './App.css'

export default function App() {
  function isActive({ isActive }) {
    return isActive ? 'active' : ''
  }
  return (
    <div className='container'>
      <Header />
      <main>
        <div className='nav_container'>
          {/* 使用NavLink，可以根据点击哪个组件，就给哪个组件添加active类名 */}
          <NavLink className={isActive} to='/about'>About</NavLink>
          <NavLink className={isActive} to='/home'>Home</NavLink>
        </div>
        <div className='content'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* 路由重定向 */}
            <Route path='/' element={<Navigate to='/home' />} />
          </Routes>
        </div>
      </main >
    </div >
  )
}
