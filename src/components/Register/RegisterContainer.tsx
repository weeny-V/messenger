import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Register from './Register';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

const RegisterContainer = (): JSX.Element => {
    const navigate = useNavigate()
    const { darkMode } = useAppSelector( state => state.profile )

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/messenger/chat')
            }
        });
    }, [])

    return (
        <Register darkMode={darkMode}/>
    )
}

export default RegisterContainer