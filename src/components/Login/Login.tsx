import React  from 'react';
import './Login.scss';
import Logo from '../../components/Header/Logo/Logo';
import { useAppSelector } from '../../app/hooks';
import LoginFormContainer from './LoginForm/LoginFormContainer';

function Login(): JSX.Element {
    const { darkMode } = useAppSelector(state => state.profile)

    return (
        <div className={`${darkMode ? 'login--dark' : ''} login`}>
            <Logo isAppear={true}/>
            <h2 className={`${darkMode ? 'login__text--dark' : ''} login__text`}
            >Login to Your Account!</h2>
            <LoginFormContainer/>
        </div>
    )
}

export default Login;