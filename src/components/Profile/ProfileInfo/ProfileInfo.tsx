import React from 'react';
import './ProfileInfo.scss'

interface ProfileInfoInterface {
    darkMode: boolean;
    email: string,
    gender: string,
    bio: string,
    phone: string,
    country: string,
}

function ProfileInfo( { darkMode, email, gender, bio, phone, country }: ProfileInfoInterface ): JSX.Element {
    return (
        <div className={`${darkMode ? 'info--dark' : ''} info`}>
            <div className='info__wrapper'>
                <span className='info__label'>Country</span>
                <p className={`${darkMode ? 'info__field--dark' : ''} info__field-Country info__field`}>{country}</p>
            </div>
            <div className='info__wrapper'>
                <span className='info__label'>Phone</span>
                <p className={`${darkMode ? 'info__field--dark' : ''} info__field-Phone info__field`}>{phone}</p>
            </div>
            <div className='info__wrapper'>
                <span className='info__label'>Gender</span>
                <p className={`${darkMode ? 'info__field--dark' : ''} info__field-Gender info__field`}>{gender}</p>
            </div>
            <div className='info__wrapper'>
                <span className='info__label'>Email</span>
                <p className={`${darkMode ? 'info__field--dark' : ''} info__field-Email info__field`}>{email}</p>
            </div>
            {bio.length > 0
                ? (
                    <div className='info__wrapper'>
                        <span className='info__label'>Bio</span>
                        <p className={`${darkMode ? 'info__field--dark' : ''} info__field`}>{bio}</p>
                    </div>
                ) : null
            }
        </div>
    )
}

export default ProfileInfo;