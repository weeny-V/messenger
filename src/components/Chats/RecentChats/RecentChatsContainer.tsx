import React from 'react';
import RecentChats from './RecentChats';
import { useAppSelector } from '../../../app/hooks';
import { SettingsAPI } from '../../../API/SettingsAPI/SettingsApi';

const RecentChatsContainer = (): JSX.Element => {
    const { darkMode, chats } = useAppSelector( state => state.profile )

    return (
        <RecentChats darkMode={darkMode}
                     chatList={chats}
        />
    )
}

export default RecentChatsContainer