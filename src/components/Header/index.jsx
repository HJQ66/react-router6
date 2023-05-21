import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  //前进一步
  function forward(){
    navigate(1)
  }
  // 后退一步
  function back(){
    navigate(-1)
  }
    return (
      <div>
        <h1 style={{borderBottom:'1px solid #eee'}}>
          React Router Demo
          <button onClick={forward}>前进</button>
          <button onClick={back}>后退</button>
        </h1>
      </div>
    )
}
