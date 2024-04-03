import React from 'react'
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs'

import '../components_css/Sidebar.css'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    MongoDB
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        shopDB
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        mongoDB
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        mallDB
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        exampleDB
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar