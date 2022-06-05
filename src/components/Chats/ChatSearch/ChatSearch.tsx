import React  from 'react';
import search from '../../../assets/search.png';
import './ChatSearch.scss';
import { useAppSelector } from '../../../app/hooks';

function ChatSearch(): JSX.Element {
    const { darkMode } = useAppSelector(state => state.profile)

    return (
        <div className='search'>
            <input className={`${darkMode ? 'search__input--dark' : ''} search__input`}
                   placeholder='Search for messages or users...'/>
            <button className='search__btn'>
                <img className='search__image' src={search} alt='search'/>
            </button>
        </div>
    )
}

export default ChatSearch;