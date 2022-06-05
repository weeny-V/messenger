import React from 'react';
import ProfileInfo from './ProfileInfo';
import { useAppSelector } from '../../../app/hooks';

const ProfileInfoContainer = () :JSX.Element => {
    const { darkMode } = useAppSelector(state => state.profile)
    const { email, gender, bio, country, phone } = useAppSelector(state => state.profile)


    return (
        <ProfileInfo darkMode={darkMode}
                     email={email}
                     gender={gender}
                     bio={bio}
                     country={country}
                     phone={phone}
        />
    )
}

export default ProfileInfoContainer