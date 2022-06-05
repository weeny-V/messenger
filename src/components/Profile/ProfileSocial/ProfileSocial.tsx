import React from 'react';
import './ProfileSocial.scss';

interface ProfileSocialInterface {
    darkMode: boolean;
    twitter: string;
    facebook: string;
    instagram: string;
    github: string;
    slack: string
}

function ProfileSocial( {
                            darkMode,
                            twitter,
                            facebook,
                            instagram,
                            github,
                            slack
                        }: ProfileSocialInterface ): JSX.Element {
    return (
        <>
            {twitter !== '' && facebook !== '' && instagram !== '' && github !== '' && slack !== ''
                ? (
                    <div className={`${darkMode ? 'social--dark' : ''} social`}>
                        {twitter !== ''
                            ? (
                                <div className='social__wrapper'>
                                    <span className='social__label'>Twitter</span>
                                    <p className={`${darkMode ? 'social__field--dark' : ''} social__field-Twitter social__field`}>{twitter}</p>
                                </div>
                            ) : null
                        }
                        {facebook !== ''
                            ? (
                                <div className='social__wrapper'>
                                    <span className='social__label'>Facebook</span>
                                    <p className={`${darkMode ? 'social__field--dark' : ''} social__field-Facebook social__field`}>{facebook}</p>
                                </div>
                            ) : null
                        }
                        {twitter !== ''
                            ? (
                                <div className='social__wrapper'>
                                    <span className='social__label'>Instagram</span>
                                    <p className={`${darkMode ? 'social__field--dark' : ''} social__field-Instagram social__field`}>{instagram}</p>
                                </div>
                            ) : null
                        }
                        {twitter !== ''
                            ? (
                                <div className='social__wrapper'>
                                    <span className='social__label'>Github</span>
                                    <p className={`${darkMode ? 'social__field--dark' : ''} social__field-Github social__field`}>{github}</p>
                                </div>
                            ) : null
                        }
                        {twitter !== ''
                            ? (
                                <div className='social__wrapper'>
                                    <span className='social__label'>Slack</span>
                                    <p className={`${darkMode ? 'social__field--dark' : ''} social__field-Slack social__field`}>{slack}</p>
                                </div>
                            ) : null
                        }
                    </div>
                ) : null
            }
        </>
    )
}

export default ProfileSocial;