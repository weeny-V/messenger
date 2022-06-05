import React from 'react';
import './Chats.scss';
import ChatSearch from './ChatSearch/ChatSearch';
import ChatRecentUsers from './ChatRecentUsers/ChatRecentUsers';
import { useAppSelector } from '../../app/hooks';
import RecentChatsContainer from './RecentChats/RecentChatsContainer';

function Chats(): JSX.Element {
    const { darkMode } = useAppSelector(state => state.profile)

    return (
        <div className={`${darkMode ? 'chats__wrapper--dark' : ''} chats__wrapper`}>
            <div className='chats'>
                <h2 className={`${darkMode ? 'chats__topic--dark' : ''} chats__topic`}>Chats</h2>
                <ChatSearch/>
                <ChatRecentUsers/>
                <h3 className={`${darkMode ? 'chats__topic--dark' : ''} chats__topic chats__topic-3`}>Recent Chats</h3>
                <RecentChatsContainer/>
            </div>
        </div>
    )
}

export default Chats;