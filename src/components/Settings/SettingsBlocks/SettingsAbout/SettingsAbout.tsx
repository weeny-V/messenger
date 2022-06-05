import React, { ChangeEvent, useRef, useState } from 'react';
import upload from '../../../../assets/upload.png';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

interface SettingsAboutInterface {
    darkMode: boolean;
    saveSettings: ( url: any, name: string, status: string, phone: string, email: string, bio: string, dispatch: any ) => void
    uploadingInfo: boolean;
}

interface ImageInterface {
    photo: string
}

const Image = styled.div`
    width: 50px;
    height: 50px;
    background-size: cover;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${( props: ImageInterface ) => props.photo});
    margin-bottom: 20px;
`

function SettingsAbout( { darkMode, saveSettings, uploadingInfo }: SettingsAboutInterface ): JSX.Element {
    const [icon, setIcon] = useState<any>( upload )
    const [name, setName] = useState( '' );
    const [status, setStatus] = useState( '' );
    const [phone, setPhone] = useState( '' );
    const [email, setEmail] = useState( '' );
    const [bio, setBio] = useState( '' );
    const uploadRef = useRef<HTMLInputElement>( null )
    const dispatch = useDispatch()

    return (
        <form className={`${darkMode ? 'settings__form--dark' : ''} settings__form settings__form-appearLeft`}>
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}>Photo</label>
            <label className={`${darkMode ? 'settings__custom-upload--dark' : ''} settings__custom-upload`}
                   htmlFor='upload'
            >
                <Image alt='load' photo={icon}/>
                Choose your profile photo
            </label>
            <input className={`${darkMode ? 'settings__input--dark' : ''} settings__input`}
                   type='file'
                   id='upload'
                   onChange={( e: ChangeEvent<HTMLInputElement> ) => {
                       if (e.target.files) {
                           setIcon( URL.createObjectURL( e.target.files[0] ) )
                       }
                   }}
                   ref={uploadRef}
                   multiple={false}
                   accept={'image/*'}
            />
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='name'
            >Name</label>
            <input className={`${darkMode ? 'settings__input--dark' : ''} settings__input`}
                   type='text'
                   value={name}
                   onChange={e => setName( e.target.value )}
                   id='name'
                   autoComplete='on'
            />
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='status'
            >Status</label>
            <input className={`${darkMode ? 'settings__input--dark' : ''} settings__input`}
                   type='text'
                   value={status}
                   onChange={e => setStatus( e.target.value )}
                   id='status'
                   autoComplete='on'
            />
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='phone'
            >Phone</label>
            <input className={`${darkMode ? 'settings__input--dark' : ''} settings__input`}
                   type='tel'
                   value={phone}
                   onChange={e => setPhone( e.target.value )}
                   id='phone'
                   autoComplete='on'
            />
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='email'
            >Email</label>
            <input className={`${darkMode ? 'settings__input--dark' : ''} settings__input`}
                   type='email'
                   value={email}
                   onChange={e => setEmail( e.target.value )}
                   id='email'
                   autoComplete='on'
            />
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='bio'
            >Bio</label>
            <textarea className={`${darkMode ? 'settings__textarea--dark' : ''} settings__textarea`}
                      rows={8}
                      value={bio}
                      onChange={e => setBio( e.target.value )}
                      id='bio'
                      autoComplete='off'
            />
            <button className='settings__btn' type='button' disabled={uploadingInfo}
                 onClick={() => {
                     if (uploadRef.current && uploadRef.current.files) {
                         saveSettings( uploadRef.current.files[0], name, status, phone, email, bio, dispatch )
                         uploadRef.current.value = ''

                     }
                     setName( '' )
                     setStatus( '' )
                     setPhone( '' )
                     setBio( '' )
                     setEmail( '' )
                     setIcon( upload )
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

export default SettingsAbout;