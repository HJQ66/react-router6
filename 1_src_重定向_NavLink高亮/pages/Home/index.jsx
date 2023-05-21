import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
  const [count,setCount] = React.useState(0)
    return (
      <div>
        <h1>Home</h1>
        {/* 当加到三跳转到About路由 */}
        {count ===3 ? <Navigate to='/about'/> : <p>当前数字为：{count}</p>}
        <button onClick={()=>{setCount(val=>val+1)}}>点我加1</button>
      </div>
    )
}
