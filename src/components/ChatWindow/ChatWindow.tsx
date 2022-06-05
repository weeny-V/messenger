import React, { useEffect, useState } from 'react';
import './ChatWindow.scss';
import UserInfo from './UserInfo/UserInfo';
import Window from './Window/Window';
import PartnerInfo from '../PartnerInfo/PartnerInfo';
import { useAppSelector } from '../../app/hooks';
import SendFieldContainer from './SendField/SendFieldContainer';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentChat } from '../../redux/reducers/ProfileSlice';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

function ChatWindow(): JSX.Element {
    const [isOpen, setIsOpen] = useState( false );
    const { darkMode, currentChat, id, chats } = useAppSelector( state => state.profile )
    const { chatID } = useParams()
    const dispatch = useDispatch()

    useEffect( () => {
        if (chatID) {
            chats.forEach( user => {
                if (user.chatId === chatID) {
                    dispatch( setCurrentChat( [{
                        name: user.name,
                        photo: user.photo,
                        chatId: user.chatId,
                    }] ) )
                }
            } )
        }
    }, [chats] )

    if(chats.length === 0) {
        return (
            <div className='no-chats'>
                <p className='no-chats__text'>No Chats</p>
            </div>
        )
    }

    if (currentChat.length === 0) {
        return (
            <div className={`${darkMode ? 'chat-noChat--dark' : ''} chat-noChat`}>
                <p className={`chat-noChat__text`}>Select a chat</p>
            </div>
        )
    }

    return (
        <>
            <div className={`${darkMode ? 'chat-window--dark' : ''} chat-window`}>
                <UserInfo setIsOpen={setIsOpen}/>
                <Window/>
                <SendFieldContainer/>
            </div>
            {isOpen
                && (
                    <PartnerInfo setIsOpen={setIsOpen}/>
                )
            }
        </>
    )

}

export default ChatWindow;