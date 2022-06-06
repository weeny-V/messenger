import React, { useEffect } from 'react';
import LoginForm from './LoginForm';
import { useAppSelector } from '../../../app/hooks';
import { LoginAPI }  from '../../../API/LoginAPI/LoginAPI';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const LoginFormContainer = (): JSX.Element => {
    const { darkMode } = useAppSelector(state => state.profile)
    const navigate = useNavigate()

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/messenger/chat')
            }
        });
    }, [])

    function handleSignIn(checkbox: boolean, email: string, password: string) {
        LoginAPI.setRememberMe(checkbox, email, password).then(data => {
            if(data) {
                navigate('/messenger/chat')
            } else {
                navigate('/messenger/login')
            }
        })
    }

    return (
        <LoginForm darkMode={darkMode}
                   handleSignIn={handleSignIn}
                   resetPassword={LoginAPI.resetPassword}
        />
    )
}

export default LoginFormContainer