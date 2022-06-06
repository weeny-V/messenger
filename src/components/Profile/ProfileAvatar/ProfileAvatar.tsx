import React from 'react';
import './ProfileAvatar.scss';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface ProfileAvatarInterface {
    darkMode: boolean;
    photo: string;
    name: string;
    status: string|null;
}

interface AvatarInterface {
    photo: string;
}

const Avatar = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-image: url(${( props: AvatarInterface ) => props.photo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const ProfileAvatar = ( { darkMode, photo, status, name }: ProfileAvatarInterface ): JSX.Element => {
    const navigate = useNavigate()

    return (
        <div className={`${darkMode ? 'avatar--dark' : ''} avatar`}>

            <Avatar photo={photo}/>
            <p className={`${darkMode ? 'avatar__name--dark' : ''} avatar__name`}>{name}</p>
            <span className='avatar__status'>{status !== null ? status : null}</span>
            <div className='avatar__edit' onClick={() => navigate('/messenger/settings')}/>
        </div>
    )
}

export default ProfileAvatar;