import React from 'react';
import { Route, Routes, useRoutes, Navigate } from 'react-router-dom';
import './App.scss';
import Chats from './components/Chats/Chats';
import Groups from './components/Groups/Groups';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import ChatWindow from './components/ChatWindow/ChatWindow';
import HeaderContainer from './components/Header/HeaderContainer';
import ContactsContainer from './components/Contacts/ContactsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import RegisterContainer from './components/Register/RegisterContainer';
import GroupUsersContainer from './components/Groups/GroupUsers/GroupUsersContainer';
import GroupDetailsContainer from './components/Groups/GroupDetails/GroupDetailsContainer';

const App = () => {
    const HeaderPaths = () => useRoutes( [
        { path: 'messenger/', element: <Navigate to='chat'/> },
        { path: 'messenger/chat', element: <HeaderContainer/> },
        { path: 'messenger/:tab/*', element: <HeaderContainer/> },
    ] )
    const SidebarPaths = () => useRoutes( [
        { path: 'messenger/', element: <Navigate to='chat'/> },
        { path: 'messenger/chat', element: <SidebarContainer/> },
        { path: 'messenger/chat/*', element: <SidebarContainer/> },
        { path: 'messenger/groups/*', element: <SidebarContainer/> },
        { path: 'messenger/groups', element: <SidebarContainer/> },
        { path: 'messenger/contact', element: <SidebarContainer/> },
        { path: 'messenger/profile', element: <SidebarContainer/> },
        { path: 'messenger/settings', element: <SidebarContainer/> },
    ] )
    const ChatWindowPaths = () => useRoutes( [
        { path: 'messenger/', element: <Navigate to='chat'/> },
        { path: 'messenger/chat', element: <ChatWindow/> },
        { path: 'messenger/groups/*', element: <ChatWindow/> },
        { path: 'messenger/groups', element: <ChatWindow/> },
        { path: 'messenger/contact', element: <ChatWindow/> },
        { path: 'messenger/profile', element: <ChatWindow/> },
        { path: 'messenger/chat/:chatID', element: <ChatWindow/>},
    ] )

    return (
        <div className='App'>
            <HeaderPaths/>
            <div className='content'>
                <SidebarPaths/>
                <Routes>
                    <Route path='messenger/chat/*' element={<Chats/>}/>
                    <Route path='messenger/groups/*' element={<Groups/>}>
                        <Route path='' element={<Navigate to='member'/>}/>
                        <Route path='member' element={<GroupUsersContainer/>}/>
                        <Route path='details' element={<GroupDetailsContainer/>}/>
                    </Route>
                    <Route path='messenger/contact' element={<ContactsContainer/>}/>
                    <Route path='messenger/profile' element={<Profile/>}/>
                    <Route path='messenger/login' element={<Login/>}/>
                    <Route path='messenger/register' element={<RegisterContainer/>}/>
                    <Route path='messenger/settings' element={<Settings/>}/>
                </Routes>
                <ChatWindowPaths/>
            </div>
        </div>
    )
}

export default App;
