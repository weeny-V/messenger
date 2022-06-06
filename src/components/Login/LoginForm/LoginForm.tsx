import React, { ChangeEvent, useState } from 'react';
import close from '../../../assets/close.png'
import './LoginForm.scss';
import { Link } from 'react-router-dom';

interface LoginFormInterface {
    darkMode: boolean;
    handleSignIn: ( checkbox: boolean, email: string, password: string ) => void;
    resetPassword: (email: string) => Promise<boolean>;
}

function LoginForm( { darkMode, handleSignIn, resetPassword }: LoginFormInterface ): JSX.Element {
    const [email, setEmail] = useState( '' );
    const [password, setPassword] = useState( '' );
    const [checkbox, setCheckbox] = useState( false )
    const [resetEmail, setResetEmail] = useState('')
    const [openModal, setOpenModal] = useState( false )

    return (
        <form className={`${darkMode ? 'login-form--dark' : ''} login-form`}>
            <input className={`${darkMode ? 'login-form__input--dark' : ''} login-form__input`}
                   type='email'
                   value={email}
                   onChange={( e: ChangeEvent<HTMLInputElement> ) => setEmail( e.target.value )}
                   placeholder='Email'
                   autoComplete='on'
            />
            <input className={`${darkMode ? 'login-form__input--dark' : ''} login-form__input`}
                   type='password'
                   value={password}
                   onChange={( e: ChangeEvent<HTMLInputElement> ) => setPassword( e.target.value )}
                   placeholder='Password'
                   autoComplete='off'
            />
            <div className='login-form__wrapper'>
                <div className='login-form--minusMargin'>
                    <input type='checkbox'
                           id='checkbox-login'
                           className='custom-checkbox'
                           checked={checkbox}
                           onChange={() => checkbox ? setCheckbox( false ) : setCheckbox( true )}
                    />
                    <label htmlFor='checkbox-login' className='checkbox-remember'>Remember me</label>
                </div>
                <button className='checkbox-forgot' type='button'
                   onClick={() => setOpenModal(true)}
                >Forgot Password?</button>
            </div>
            <button className='login-form__btn login-form__submit-btn' type='button'
                    onClick={() => handleSignIn( checkbox, email, password )}
            >Login
            </button>
            <Link to='/messenger/register' className={`${darkMode ? 'login-form__sign-up--dark' : ''} login-form__sign-up`}
            >Sign Up
            </Link>
            {
                openModal
                    ? (
                        <div className='login-modal__wrapper' onClick={() => {
                            setOpenModal(false)
                        }}>
                            <div className='login-modal__reset-password'
                                 onClick={(event) => event.stopPropagation()}
                            >
                                <button className='login-modal__close-btn' onClick={() => setOpenModal(false)}>
                                    <img className='login-modal__icon' src={close} alt='close'/>
                                </button>
                                <h3 className='login-modal__topic'>Reset Password</h3>
                                <label className='login-modal__label'>Enter your current email to send you reset password form</label>
                                <input className={`${darkMode ? 'login-form__input--dark' : ''} login-form__input`}
                                       type='email'
                                       autoComplete='off'
                                       placeholder='Enter your account email'
                                       value={resetEmail}
                                       onChange={(e: ChangeEvent<HTMLInputElement>) => setResetEmail(e.target.value)}
                                />
                                <button className='login-modal__btn'
                                        type='button'
                                        onClick={() => {
                                            resetPassword(resetEmail).then(response => {
                                                if(response) {
                                                    setOpenModal(false)
                                                }
                                            })
                                        }}
                                >Send</button>
                            </div>
                        </div>
                    ) : null
            }
        </form>
    )
}

export default LoginForm;