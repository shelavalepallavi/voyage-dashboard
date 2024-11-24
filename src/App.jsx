import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'
import UserInfo from './components/UserInfo/UserInfo'
import VoyageInfo from './components/VoyageInfo/VoyageInfo'
import DailyStream from './components/DailyStream/DailyStream'
import MyDay from './components/MyDay/MyDay'

const App = () => {
  return (
    <div className='app'>
      <div className='app-left'>
      <Sidebar/>
      </div>
      <div className='app-right'>
      <Navbar/>
      <div className='app-right-down'>
        <div className='app-right-info'>
          <UserInfo/>
          <VoyageInfo/>
        </div>
        <DailyStream/>
        <MyDay/>
      </div>
      </div>
    </div>
  )
}

export default App
