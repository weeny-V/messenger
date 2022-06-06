import React, { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setLoading } from '../../redux/reducers/MainSlice';

const HeaderContainer = (): JSX.Element => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { darkMode } = useAppSelector( state => state.profile )

    useEffect( () => {
        dispatch(setLoading(true))
        const auth = getAuth()
        onAuthStateChanged( auth, ( user ) => {
            if (user) {
                dispatch( { type: 'SET_USER_INFO', payload: user.uid } )
                // dispatch( { type: 'SET_PHOTO_REQUEST', payload: user.uid } )
            } else {
                navigate( '/messenger/login' )
            }
        } )
    }, [] )

    return (
        <Header darkMode={darkMode}/>
    )
}

export default HeaderContainer;