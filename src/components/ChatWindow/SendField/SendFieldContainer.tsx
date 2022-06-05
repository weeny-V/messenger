import React  from 'react';
import SendField from './SendField';
import { useAppSelector } from '../../../app/hooks';
import { realDB } from '../../../firebase';
import { ref, set, update } from 'firebase/database';


const SendFieldContainer = (): JSX.Element => {
    const { darkMode, name, photo, id } = useAppSelector(state => state.profile)

    function sendMessage(message: string, chatID: string) {
        console.log(chatID)
        const timestamp = Date.now();

        set(ref(realDB, `chats/${chatID}/${timestamp}`), {
            username: name,
            message,
            photo,
            from: id,
        });
    }

    return (
        <SendField darkMode={darkMode}
                   sendMessage={sendMessage}
        />
    )
}

export default SendFieldContainer