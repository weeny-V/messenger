import React from 'react';
import user from '../../../assets/user.png';
import './ChatRecentUsers.scss';

function ChatRecentUsers(): JSX.Element {
    return (
        <ul className='recent-users'>
            <li className='recent-users__user'>
                <img className='recent-users__image' src={user} alt='user'/>
                <p className='recent-users__name'>Alan Badoev</p>
            </li>
            <li className='recent-users__user'>
                <img className='recent-users__image' src={user} alt='user'/>
                <p className='recent-users__name'>Jack Sparrow</p>
            </li>
            <li className='recent-users__user'>
                <img className='recent-users__image' src={user} alt='user'/>
                <p className='recent-users__name'>Zack Rivver</p>
            </li>
            <li className='recent-users__user'>
                <img className='recent-users__image' src={user} alt='user'/>
                <p className='recent-users__name'>William Nady</p>
            </li>
            <li className='recent-users__user'>
                <img className='recent-users__image' src={user} alt='user'/>
                <p className='recent-users__name'>Tom Holland</p>
            </li>
            <li className='recent-users__user'>
                <img className='recent-users__image' src={user} alt='user'/>
                <p className='recent-users__name'>Spider Man</p>
            </li>
            <li className='recent-users__user'>
                <img className='recent-users__image' src={user} alt='user'/>
                <p className='recent-users__name'>Captain America</p>
            </li>
        </ul>
    )
}

export default ChatRecentUsers