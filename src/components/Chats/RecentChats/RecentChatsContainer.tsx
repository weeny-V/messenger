import React, { useEffect } from 'react';
import RecentChats from './RecentChats';
import { useAppSelector } from '../../../app/hooks';
import { useDispatch } from 'react-redux';

const RecentChatsContainer = (): JSX.Element => {
    const { darkMode, chats, id } = useAppSelector( state => state.profile )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'SET_CHATS', payload: id})

    }, [id])

    useEffect(() => {
        dispatch({type: 'SET_CHATS', payload: id})
    }, [])

    return (
        <RecentChats darkMode={darkMode}
                     chatList={chats}
        />
    )
}

export default RecentChatsContainer