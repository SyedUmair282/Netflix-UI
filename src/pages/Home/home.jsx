import React from 'react'
import './home.scss'
import Navbar from '../../Components/navbar/navbar'
import Featured from '../../Components/featured/featured'
import List from '../../Components/list/list'


const home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default home;