import React  from 'react';
import { useAppSelector } from '../../../app/hooks';
import ProfileAvatar from './ProfileAvatar';

const ProfileAvatarContainer = (): JSX.Element => {
    const { darkMode } = useAppSelector( state => state.profile )
    const { photo, name, status } = useAppSelector( state => state.profile )

    return (
        <ProfileAvatar darkMode={darkMode}
                       photo={photo}
                       name={name}
                       status={status}
        />
    )
}

export default ProfileAvatarContainer