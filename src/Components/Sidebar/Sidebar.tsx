import React from 'react'
import './Sidebar.css'
import { TrendingUp, Send, Dashboard, Hail } from '@mui/icons-material'

const Sidebar = () => {
  return (
    <div className='Sidebar-container'>
        <div className="sidebar-wrapper">
            <div className="title-text-cont">
                <div className="title-text">
                    <p className="text-sidebar">Menu</p>
                </div>
            </div>
            <ul className="sidebar-menus">
                    <li className="sidebar-menu-items">
                        <div className="sidebar-menu-icon-container">
                            <div className="sidebar-icon">
                                <Dashboard />
                            </div>
                            <div className="sidebar-text-icon">Overview</div>
                        </div>
                    </li>
                    <li className="sidebar-menu-items">
                        <div className="sidebar-menu-icon-container">
                            <div className="sidebar-icon">
                                <Hail /> 
                            </div>
                            <div className="sidebar-text-icon">Trader Profile</div>
                        </div>
                    </li>
                    <li className="sidebar-menu-items">
                        <div className="sidebar-menu-icon-container">
                            <div className="sidebar-icon">
                                <TrendingUp /> 
                            </div>
                            <div className="sidebar-text-icon">Charts</div>
                        </div>
                    </li>
                    <li className="sidebar-menu-items">
                        <div className="sidebar-menu-icon-container">
                            <div className="sidebar-icon">
                                <Send /> 
                            </div>
                            <div className="sidebar-text-icon">Mailbox</div>
                        </div>
                    </li>
            </ul>
    </div>
</div>
      
  )
}

export default Sidebar