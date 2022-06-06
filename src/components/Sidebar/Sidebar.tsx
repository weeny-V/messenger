import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.scss';
import logout from '../../assets/logout.png';
import logoutDark from '../../assets/logout-dark.png';

interface SidebarInterface {
    darkMode: boolean;
    signOutProcess: () => void;
    changePrevPath: (value: string) => void;
}

function Sidebar( { darkMode, signOutProcess, changePrevPath }: SidebarInterface ): JSX.Element {
    return (
        <nav className={`${darkMode ? 'sidebar--dark' : ''} sidebar`}>
            <ul className='sidebar__menu'>
                <li className='sidebar__item'>
                    <NavLink className={( { isActive } ) => isActive
                        ? `sidebar__link-active`
                        : `${darkMode ? 'sidebar__link--dark' : ''} sidebar__link`}
                             to='/messenger/chat'
                             onClick={() => changePrevPath('chat')}
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                             fill='none'
                             stroke='black' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'
                             className='sidebar__image'>
                            <path
                                d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'/>
                            <polyline points='22,6 12,13 2,6'/>
                        </svg>
                    </NavLink>
                    <div className='sidebar__label sidebar__label-message'>Chats</div>
                </li>
                <li className='sidebar__item'>
                    <NavLink className={( { isActive } ) => isActive
                        ? 'sidebar__link-active'
                        : `${darkMode && 'sidebar__link--dark'} sidebar__link`}
                             to='/messenger/groups'
                             onClick={() => changePrevPath('groups')}
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                             fill='none'
                             stroke='currentColor' strokeWidth='1' strokeLinecap='round'
                             strokeLinejoin='round'
                             className='sidebar__image'>
                            <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'/>
                            <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'/>
                        </svg>
                    </NavLink>
                    <div className='sidebar__label'>Groups</div>
                </li>
                <li className='sidebar__item'>
                    <NavLink className={( { isActive } ) => isActive
                        ? 'sidebar__link-active'
                        : `${darkMode && 'sidebar__link--dark'} sidebar__link`}
                             to='/messenger/contact'
                             onClick={() => changePrevPath('contact')}
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                             fill='none'
                             stroke='currentColor' strokeWidth='1' strokeLinecap='round'
                             strokeLinejoin='round'
                             className='sidebar__image'>
                            <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'/>
                            <circle cx='9' cy='7' r='4'/>
                            <path d='M23 21v-2a4 4 0 0 0-3-3.87'/>
                            <path d='M16 3.13a4 4 0 0 1 0 7.75'/>
                        </svg>
                    </NavLink>
                    <div className='sidebar__label'>Contact</div>
                </li>
                <li className='sidebar__item'>
                    <NavLink className={( { isActive } ) => isActive
                        ? 'sidebar__link-active'
                        : `${darkMode && 'sidebar__link--dark'} sidebar__link`}
                             to='/messenger/profile'
                             onClick={() => changePrevPath('profile')}
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                             fill='none'
                             stroke='currentColor' strokeWidth='1' strokeLinecap='round'
                             strokeLinejoin='round'
                             className='sidebar__image'>
                            <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/>
                            <circle cx='12' cy='7' r='4'/>
                        </svg>
                    </NavLink>
                    <div className='sidebar__label'>Profile</div>
                </li>
                <li className='sidebar__item'>
                    <NavLink className={( { isActive } ) => isActive
                        ? 'sidebar__link-active'
                        : `${darkMode && 'sidebar__link--dark'} sidebar__link`}
                             to='/messenger/settings'
                             onClick={() => changePrevPath('settings')}
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                             fill='none'
                             stroke='currentColor' strokeWidth='1' strokeLinecap='round'
                             strokeLinejoin='round'
                             className='sidebar__image'>
                            <circle cx='12' cy='12' r='3'/>
                            <path
                                d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'/>
                        </svg>
                    </NavLink>
                    <div className='sidebar__label'>Settings</div>
                </li>
                <li className='sidebar__item'>
                    <NavLink className='sidebar__link'
                             to='/messenger/login'
                             onClick={() => {
                                 changePrevPath('chat')
                                 signOutProcess()
                             }}
                    >
                        {darkMode
                            ? (<img className='sidebar__image' src={logoutDark} alt='logout'/>)
                            : (<img className='sidebar__image' src={logout} alt='logout'/>)
                        }
                    </NavLink>
                    <div className='sidebar__label'>Logout</div>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;