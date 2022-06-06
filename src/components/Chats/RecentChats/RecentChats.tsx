import React, { useEffect, useRef } from 'react';
import './RecentChats.scss';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentChat } from '../../../redux/reducers/ProfileSlice';
import { useAppSelector } from '../../../app/hooks';

interface AvatarInterface {
    photo: string;
    width: number;
    height: number;
}

const Avatar = styled.div`
    width: ${( props: AvatarInterface ) => props.width}px;
    height: ${( props: AvatarInterface ) => props.height}px;
    border-radius: 50%;
    background-image: url(${( props: AvatarInterface ) => props.photo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 20px;
`

type ChatListType = {
    chatId: string,
    timestamp: string,
    name: string;
    photo: string;
    id: string;
    lastMessage: string;
}

interface RecentChatsInterface {
    darkMode: boolean;
    chatList: ChatListType[];
}

const RecentChats = ( { darkMode, chatList }: RecentChatsInterface ): JSX.Element => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { chatLoading } = useAppSelector(state => state.profile)

    if(chatLoading) {
        return (
            <div className="chat-spinner__container">
                <div className="chat-spinner__loading"/>
            </div>
        )
    }

    return (
        <ul className='recent-chats'>
            {chatList.map( ( { id, lastMessage, timestamp, chatId, name,photo }, index ) => {
                return (
                <li className={`${darkMode ? 'recent-chats__block--dark' : ''} recent-chats__block`}
                    key={id}
                    onClick={() => {
                        dispatch( setCurrentChat( [{ name, photo, chatId }] ) )
                        navigate( `${chatId}` )
                    }}
                >
                    <Avatar photo={photo} width={43} height={43}/>
                    <div className='recent-chats__text'>
                        <p className={`${darkMode ? 'recent-chats__name--dark' : ''} recent-chats__name`}>{name}</p>
                        <p className='recent-chats__message'>{lastMessage}</p>
                    </div>
                    <time className='recent-chats__time'>{timestamp}</time>
                </li>
            )} )}
        </ul>
    )
}

export default RecentChats;