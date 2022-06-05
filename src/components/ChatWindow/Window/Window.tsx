import React, { useEffect, useRef, useState } from 'react';
import user from '../../../assets/user.png';
import points from '../../../assets/points.png';
import './Window.scss';
import { useAppSelector } from '../../../app/hooks';
import { realDB } from '../../../firebase';
import { ref, onChildAdded, getDatabase, get, child } from 'firebase/database';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

interface MessageInterface {
    from: string;
    photo: string;
    username: string;
    message: string;
}

interface AllMessagesInterface extends Array<MessageInterface> {
}

interface AvatarInterface {
    photo: string;
}

const Avatar = styled.div`
    width: 38px;
    height: 38px;
    margin-right: 15px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${( props: AvatarInterface ) => props.photo});
`

function Window(): JSX.Element {
    const { darkMode, currentChat, id } = useAppSelector( state => state.profile )
    const [messages, setMessages] = useState<AllMessagesInterface>( [] )
    const myId = useAppSelector( state => state.profile.id )
    const chatWindow = useRef<HTMLDivElement>( null )
    const { chatID } = useParams()

    useEffect( () => {
        const refDB = ref( getDatabase() )
        get( child( refDB, `chats/${currentChat[0].chatId}` ) ).then( ( snapshot ) => {
            if (snapshot.exists()) {
                setMessages([])
                for (let value of Object.values( snapshot.val() )) {
                    setMessages( ( prev: any ) => [...prev, value] )
                }
            } else {
                setMessages([])
            }
        } ).catch( ( error ) => {
            console.error( error );
        } );
    }, [chatID] )

    useEffect(() => {
        onChildAdded( ref( realDB, `chats/${currentChat[0].chatId}` ), ( data ) => {
            setMessages( prevState => [...prevState, data.val()] )
        } );
    }, [])

    return (
        <div className='window' ref={chatWindow}>
            {messages.map( ( { from, message, photo }, index ) => (
                <div
                    className={from === myId
                        ? 'window__message window__message-me'
                        : 'window__message window__message-partner'
                    }
                    key={`${index}-${from}`}
                >
                    <div className={`window__image ${from === myId
                        ? 'window__image-left'
                        : 'window__image-right'}`
                    }>
                        <Avatar photo={photo ? photo : user}/>
                    </div>
                    <div className={from === myId
                        ? `${darkMode ? 'message-background--dark' : ''} window__sms window__sms-me`
                        : `${darkMode ? 'message-background--dark' : ''} window__sms window__sms-partner`
                    }>
                        <p className={`${darkMode ? 'window__text window__text--dark' : ''} window__text`}>{message}</p>
                    </div>
                    <button className='window__else'>
                        <img className='window__icon' src={points} alt='three points'/>
                    </button>
                </div>
            ) )}
        </div>
    )
}

export default Window;