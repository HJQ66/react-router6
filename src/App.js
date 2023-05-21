import React from 'react'
import Header from './components/Header'
import { NavLink, useRoutes } from 'react-router-dom'
import './App.css'
//导入路由表
import routes from './routes'

export default function App() {
  const element = useRoutes(routes)

  function addActive({ isActive }) {
    return isActive ? 'active' : ''
  }
  return (
    <div className='container'>
      <Header />
      <main>
        <div className='nav_container'>
          {/* 使用NavLink，加上activeClassName属性，可以根据点击哪个组件，就给哪个组件添加active类名 */}
          <NavLink className={addActive} end to='/home'>Home</NavLink>
          <NavLink className={addActive} to='/about'>About</NavLink>
        </div>
        <div className='content'>
          {element}
        </div>
      </main>
    </div>
  )
}
