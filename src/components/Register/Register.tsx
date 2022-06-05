import React from 'react';
import Logo from '../../components/Header/Logo/Logo';
import './Register.scss';
import RegisterFormContainer from './RegisterForm/RegisterFormContainer';

interface RegisterInterface {
    darkMode: boolean;
}

function Register( { darkMode }: RegisterInterface ): JSX.Element {
    return (
        <div className={`${darkMode ? 'register--dark' : ''} register`}>
            <Logo isAppear={true}/>
            <h2 className={`${darkMode ? 'register__text--dark' : ''} register__text`}
            >Register New Account</h2>
            <RegisterFormContainer/>
            <p className={`${darkMode ? 'register__rules--dark' : ''} register__rules`}
            >By signin up, you agree to our <br/>
                <span className='register__text-underline'> Terms and Conditions</span>
                &
                <span className='register__text-underline'>Privacy Policy</span>
            </p>
        </div>
    )
}

export default Register;