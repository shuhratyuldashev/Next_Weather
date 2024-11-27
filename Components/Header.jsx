import React from 'react'
import Search_bar from './Search-bar'

const Header = () => {
  return (
    <header className='Header'>
        <br />
        <h1>Weather <span>App</span></h1>
        <Search_bar />
    </header>
  )
}

export default Header