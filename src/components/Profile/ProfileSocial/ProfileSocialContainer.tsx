import React from 'react';
import ProfileSocial from './ProfileSocial';
import { useAppSelector } from '../../../app/hooks';

const ProfileSocialContainer = () :JSX.Element => {
    const { darkMode } = useAppSelector(state => state.profile)
    const { twitter, facebook, instagram, github, slack } = useAppSelector(state => state.profile)

    return (
        <ProfileSocial darkMode={darkMode}
                       twitter={twitter}
                       facebook={facebook}
                       instagram={instagram}
                       github={github}
                       slack={slack}
        />
    )
}

export default ProfileSocialContainer