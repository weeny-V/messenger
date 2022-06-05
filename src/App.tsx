import React from 'react';
import { Route, Routes, useRoutes, Navigate, useLocation } from 'react-router-dom';
import './App.scss';
import Chats from './components/Chats/Chats';
import Groups from './components/Groups/Groups';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import ChatWindow from './components/ChatWindow/ChatWindow';
import GroupDetails from './components/Groups/GroupDetails/GroupDetails';
import HeaderContainer from './components/Header/HeaderContainer';
import ContactsContainer from './components/Contacts/ContactsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import RegisterContainer from './components/Register/RegisterContainer';
import GroupUsersContainer from './components/Groups/GroupUsers/GroupUsersContainer';
import GroupDetailsContainer from './components/Groups/GroupDetails/GroupDetailsContainer';

const App = () => {
    const HeaderPaths = () => useRoutes( [
        { path: '/', element: <Navigate to='/chat'/> },
        { path: '/chat', element: <HeaderContainer/> },
        { path: '/:tab/*', element: <HeaderContainer/> },
    ] )
    const SidebarPaths = () => useRoutes( [
        { path: '/', element: <Navigate to='/chat'/> },
        { path: '/chat', element: <SidebarContainer/> },
        { path: '/chat/*', element: <SidebarContainer/> },
        { path: '/groups/*', element: <SidebarContainer/> },
        { path: '/groups', element: <SidebarContainer/> },
        { path: '/contact', element: <SidebarContainer/> },
        { path: '/profile', element: <SidebarContainer/> },
        { path: '/settings', element: <SidebarContainer/> },
    ] )
    const ChatWindowPaths = () => useRoutes( [
        { path: '/', element: <Navigate to='/chat'/> },
        { path: '/chat', element: <ChatWindow/> },
        { path: '/groups/*', element: <ChatWindow/> },
        { path: '/groups', element: <ChatWindow/> },
        { path: '/contact', element: <ChatWindow/> },
        { path: '/profile', element: <ChatWindow/> },
        { path: '/chat/:chatID', element: <ChatWindow/>},
    ] )

    return (
        <div className='App'>
            <HeaderPaths/>
            <div className='content'>
                <SidebarPaths/>
                <Routes>
                    <Route path='/chat/*' element={<Chats/>}/>
                    <Route path='/groups/*' element={<Groups/>}>
                        <Route path='' element={<Navigate to='member'/>}/>
                        <Route path='member' element={<GroupUsersContainer/>}/>
                        <Route path='details' element={<GroupDetailsContainer/>}/>
                    </Route>
                    <Route path='/contact' element={<ContactsContainer/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<RegisterContainer/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
                <ChatWindowPaths/>
            </div>
        </div>
    )
}

export default App;
