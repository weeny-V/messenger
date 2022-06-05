import React  from 'react';
import user from '../../../assets/user.png';
import './PartnerAvatar.scss';
import { useAppSelector } from '../../../app/hooks';

function PartnerAvatar(): JSX.Element {
    const { darkMode } = useAppSelector(state => state.profile)

    return (
        <div className={`${darkMode ? 'partner-avatar--dark' : ''} partner-avatar`}>
            <img className='partner-avatar__image' src={user} alt='avatar'/>
            <p className={`${darkMode ? 'partner-avatar__name--dark' : ''} partner-avatar__name`}>Vlad Kruglov</p>
            <span className='partner-avatar__status'>Front-end developer</span>
        </div>
    )
}

export default PartnerAvatar;