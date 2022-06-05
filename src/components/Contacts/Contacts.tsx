import React, { ChangeEvent, useState } from 'react';
import search from '../../assets/search.png';
import './Contacts.scss';
import ContactUsersListContainer from './ContactUsersList/ContactUserListContainer';

interface ContactsInterface {
    isDarkMode: boolean;
}

function Contacts( { isDarkMode }: ContactsInterface): JSX.Element {
    const [searchField, setSearchField] = useState('')

    return (
        <div className={`${isDarkMode ? 'contact__wrapper--dark' : ''} contact__wrapper`}>
            <div className='contact'>
                <h2 className={`${isDarkMode ? 'contact__topic--dark' : ''} contact__topic`}>Contact</h2>
                <div className='contact__buttons'>
                    <input className={`${isDarkMode ? 'contact__search--dark' : ''} contact__search`}
                           type='text'
                           value={searchField}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchField(e.target.value)}
                           placeholder='Search for contacts...'
                    />
                    <button className='contact__submit' type='submit'>
                        <img className='contact__icon' src={search} alt='search'/>
                    </button>
                </div>
                <ContactUsersListContainer searchField={searchField}/>
            </div>
        </div>
    )
}

export default Contacts;