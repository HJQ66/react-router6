import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
import './index.css'


export default function Home() {
    return (
      <div>
        <h1>我是Home组件</h1>
        <div className='news_container'>
          <ul className='nav_news'>
            <NavLink className='nav_news_item' to='news1'>新闻1</NavLink>
            <NavLink className='nav_news_item' to='news2'>新闻2</NavLink>
          </ul>
          {/* 指定路由呈现的位置 */}
         <Outlet/>
        </div>
      </div>
    )
}
