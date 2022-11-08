import React from 'react'

export default function Header({ name}) {
  console.log(name)
  return (
    <header className='headerContainer'>
      <h1>Welcome to {name}</h1>
      <button>Add Task</button>
    </header>
  )
}
