import React, { ChangeEvent, KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import './SendField.scss';
import smile from '../../../assets/smile.png';
import send from '../../../assets/send.png';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';

interface SendFiledInterface {
    darkMode: boolean;
    sendMessage: ( message: string, chatID: string ) => void
}

function SendField( { darkMode, sendMessage }: SendFiledInterface ): JSX.Element {
    const [sendInput, setSendInput] = useState( '' )
    const { currentChat } = useAppSelector(state => state.profile)

    function handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
        if(event.key === 'Enter') {
            sendMessage( sendInput, currentChat[0].chatId)
            setSendInput('')
        }
    }

    return (
        <div className={`${darkMode ? 'send--dark' : ''} send`}>
            <label className='send__upload' htmlFor='sendUpload'/>
            <input className='send__input' id='sendUpload'/>
            <input className={`${darkMode ? 'send__textField--dark' : ''} send__textField`}
                   type='text'
                   value={sendInput}
                   onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => handleSubmit(e)}
                   onChange={( e: ChangeEvent<HTMLInputElement> ) => setSendInput( e.target.value )}
                   placeholder='Type your message...'
            />
            <div className='send__buttons'>
                <img className='send__smile' src={smile} alt='stickers'/>
                <button className='send__submitBtn' type='button' onClick={() => {
                    sendMessage( sendInput, currentChat[0].chatId )
                    setSendInput( '' )
                }}>
                    <img className='send__sendIcon' src={send} alt='send'/>
                </button>
            </div>
        </div>
    )
}

export default SendField;