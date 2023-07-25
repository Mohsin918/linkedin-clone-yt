import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="siderbar__top">
            <img src='' alt=''/>
            <Avatar className='sidebar__avatar'/>
            <h2>Mohsin Ahmad</h2>
            <h4>mohsinquantum@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you:</p>
                <div className="sidebar__statNumber">2,543</div>
            </div>

            <div className="sidebar__stat">
                <p>Views on post:</p>
                <div className="sidebar__statNumber">2,543</div>
            </div>
        </div>

        <div className="sidebar__bottom">

        </div>
    </div>
  )
}

export default Sidebar
