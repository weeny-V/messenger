import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

interface SettingsPasswordInterface {
    darkMode: boolean;
    validPasswords: ( curPassword: string, newPassword: string, confirmNewPass: string ) => void
    uploadingInfo: boolean
}

function SettingsPassword( { darkMode, validPasswords, uploadingInfo }: SettingsPasswordInterface ): JSX.Element {
    const [curPassword, setCurPassword] = useState( '' )
    const [newPassword, setNewPassword] = useState( '' )
    const [confirmNewPass, setConfirmNewPass] = useState( '' )
    const disptach = useDispatch()

    return (
        <form className={`${darkMode ? 'settings__form--dark' : ''} settings__form settings__form-appearRight`}>
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='currentPassword'
            >Current Password</label>
            <input className={`${darkMode ? 'settings__input--dark' : ''} settings__input`}
                   type='password'
                   placeholder='Current Password'
                   id='currentPassword'
                   value={curPassword}
                   onChange={( e: ChangeEvent<HTMLInputElement> ) => setCurPassword( e.target.value )}
                   autoComplete='off'
            />
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='newPassword'
            >New Password</label>
            <input className={`${darkMode ? 'settings__input--dark' : ''} settings__input`}
                   type='password'
                   placeholder='New Password'
                   id='newPassword'
                   value={newPassword}
                   onChange={( e: ChangeEvent<HTMLInputElement> ) => setNewPassword( e.target.value )}
                   autoComplete='off'
            />
            <label className={`${darkMode ? 'settings__label--dark' : ''} settings__label`}
                   htmlFor='confirmPassword'
            >Password Confirmation</label>
            <input className={`${darkMode ? 'settings__input--dark' : ''} settings__input`}
                   type='password'
                   placeholder='Password Confirmation'
                   id='confirmPassword'
                   value={confirmNewPass}
                   onChange={( e: ChangeEvent<HTMLInputElement> ) => setConfirmNewPass( e.target.value )}
                   autoComplete='off'
            />
            <button className='settings__btn'
                    type='button'
                    disabled={uploadingInfo}
                    onClick={() => {
                        validPasswords( curPassword, newPassword, confirmNewPass )
                        setCurPassword('')
                        setNewPassword('')
                        setConfirmNewPass('')
                    }}
            >Change Password
                {
                    uploadingInfo
                        ? (
                            <div className='settings__spinner-container'>
                                <div className='settings__loading-spinner'>
                                </div>
                            </div>
                        ): null
                }
            </button>
        </form>
    )
}

export default SettingsPassword;