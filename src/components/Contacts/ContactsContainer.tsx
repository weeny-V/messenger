import React  from 'react';
import Contacts from './Contacts';
import { useAppSelector } from '../../app/hooks';

const ContactsContainer = (): JSX.Element => {
    const { darkMode } = useAppSelector(state => state.profile)

    return (
        <Contacts isDarkMode={darkMode}
        />
    )
}

export default ContactsContainer