import React  from 'react';
import './Profile.scss';
import { useAppSelector } from '../../app/hooks';
import ProfileAvatarContainer from './ProfileAvatar/ProfileAvatarContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import ProfileSocialContainer from './ProfileSocial/ProfileSocialContainer';

function Profile(): JSX.Element {
    const { darkMode } = useAppSelector(state => state.profile)

    return (
        <div className={`${darkMode ? 'profile__wrapper--dark' : ''} profile__wrapper`}>
            <div className='profile'>
                <h2 className={`${darkMode ? 'profile__topic--dark' : ''} profile__topic`}>Profile</h2>
                <ProfileAvatarContainer/>
                <ProfileInfoContainer/>
                <ProfileSocialContainer/>
            </div>
        </div>
    )
}

export default Profile;