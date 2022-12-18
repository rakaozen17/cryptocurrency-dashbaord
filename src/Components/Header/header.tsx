import React, {FC, useState} from 'react'
import './header.css'
import logo from '../../public/coinbird-logo.png'
import Hamburger from '../Hamburger/Hamburger'
import { Notifications, ChatBubble, BarChart, ArrowDropDown, Person3 } from '@mui/icons-material'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isNotification, setIsNotification] = useState<boolean>(true);


    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
      };
  return (  
    <div className='main-header'>
        <div className="header-container">
            <div className="left-header">
                <div className="icon-container">
                    <img src={logo} alt="" className="icon" />
                </div>
                <div className="title-container">
                    <div className="ham-container">
                        <Hamburger onClick={handleMenuClick} isOpen={isMenuOpen} />
                    </div>
                    <div className="title-text-con">
                        <p className="title-text" style={{ fontSize:'20px' }}>Overview</p>
                    </div>
                </div>
            </div>
            <div className="right-header">
                <div className="menu-container">
                    <ul className="menus">
                        <li className="menu-items">
                            <div className="menu-icon-container">
                                <div className="notification-enabled"></div>
                                <Notifications style={{ fontSize:'20px' }}/> 
                            </div>
                        </li>
                        <li className="menu-items">
                            <div className="menu-icon-container">
                                <div className="notification-enabled"></div>
                                <ChatBubble style={{ fontSize:'20px' }}/> 
                            </div>
                        </li>
                        <li className="menu-items">
                            <div className="menu-icon-container">
                                <BarChart style={{ fontSize:'25px' }}/> 
                                <p className="menu-icon-p">Reports</p>
                            </div>
                        </li>
                        <li className="menu-items">
                            <div className="menu-icon-container">
                                <Person3 style={{ fontSize:'25px' }}/> 
                                <p className="menu-icon-p">Rama Perdana</p>
                                <ArrowDropDown style={{ fontSize:'25px' }}/> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header