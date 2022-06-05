import React, { ChangeEvent, useState } from 'react';

interface SettingsSocialInterface {
    darkMode: boolean;
    saveSettings: (twitter: string,
                   facebook: string,
                   instagram: string,
                   github: string,
                   slack: string) => void;
    uploadingInfo: boolean
}

function SettingsSocial( { darkMode, saveSettings, uploadingInfo }: SettingsSocialInterface ): JSX.Element {
    const [twitterField, setTwitterField] = useState('')
    const [facebookField, setFacebookField] = useState('')
    const [instagramField, setInstagramField] = useState('')
    const [githubField, setGithubField] = useState('')
    const [slackField, setSlackField] = useState('')

    return (
        <form className={`${darkMode ? 'settings__form--dark' : ''} settings__form settings__form-appearRight`}>
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='twitter'
            >Twitter</label>
            <div className='settings__social'>
                        <span className={`${darkMode ? 'settings__social-image--dark' : ''} settings__social-image`}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                                 fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round'
                                 strokeLinejoin='round' className='settings__social-pic'>
                                <path
                                    d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'/>
                            </svg>
                        </span>
                <input className={`${darkMode ? 'settings__social-input--dark' : ''} settings__social-input`}
                       type='text'
                       id='twitter'
                       value = {twitterField}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setTwitterField(e.target.value)}
                       placeholder='Twitter Account'
                />
            </div>
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='facebook'
            >Facebook</label>
            <div className='settings__social'>
                        <span className={`${darkMode ? 'settings__social-image--dark' : ''} settings__social-image`}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                                 fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round'
                                 strokeLinejoin='round' className='settings__social-pic'><path
                                d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'/>
                            </svg>
                        </span>
                <input className={`${darkMode ? 'settings__social-input--dark' : ''} settings__social-input`}
                       type='text'
                       id='facebook'
                       value={facebookField}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setFacebookField(e.target.value)}
                       placeholder='Facebook Account'
                />
            </div>
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='insta'
            >Instagram</label>
            <div className='settings__social'>
                        <span className={`${darkMode ? 'settings__social-image--dark' : ''} settings__social-image`}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                                 fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round'
                                 strokeLinejoin='round' className='settings__social-pic'><rect
                                x='2' y='2' width='20' height='20' rx='5' ry='5'/><path
                                d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'/><line x1='17.5' y1='6.5'
                                                                                           x2='17.51'
                                                                                           y2='6.5'/>
                            </svg>
                        </span>
                <input className={`${darkMode ? 'settings__social-input--dark' : ''} settings__social-input`}
                       type='text'
                       id='insta'
                       value={instagramField}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setInstagramField(e.target.value)}
                       placeholder='Instagram Account'
                />
            </div>
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='github'
            >Github</label>
            <div className='settings__social'>
                        <span className={`${darkMode ? 'settings__social-image--dark' : ''} settings__social-image`}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                                 fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round'
                                 strokeLinejoin='round' className='settings__social-pic'><path
                                d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'/>
                            </svg>
                        </span>
                <input className={`${darkMode ? 'settings__social-input--dark' : ''} settings__social-input`}
                       type='text'
                       id='github'
                       value={githubField}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setGithubField(e.target.value)}
                       placeholder='Github Account'
                />
            </div>
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='slack'
            >Slack</label>
            <div className='settings__social'>
                        <span className={`${darkMode ? 'settings__social-image--dark' : ''} settings__social-image`}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                                 fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round'
                                 strokeLinejoin='round' className='settings__social-pic'><path
                                d='M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z'/><path
                                d='M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'/><path
                                d='M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z'/><path
                                d='M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z'/><path
                                d='M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z'/><path
                                d='M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'/><path
                                d='M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z'/><path
                                d='M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z'/></svg>
                        </span>
                <input className={`${darkMode ? 'settings__social-input--dark' : ''} settings__social-input`}
                       type='text'
                       id='slack'
                       value={slackField}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setSlackField(e.target.value)}
                       placeholder='Slack Account'
                />
            </div>
            <button className='settings__btn'
                    disabled={uploadingInfo}
                    onClick={() => {
                        saveSettings(twitterField, facebookField, instagramField, githubField, slackField)
                        setTwitterField('')
                        setFacebookField('')
                        setInstagramField('')
                        setGithubField('')
                        setSlackField('')
                    }}
            >Save Settings
                {
                    uploadingInfo
                        ? (
                            <div className='setting__spinner-container'>
                                <div className='settings__loading-spinner'>
                                </div>
                            </div>
                        ): null
                }
            </button>
        </form>
    )
}

export default SettingsSocial;