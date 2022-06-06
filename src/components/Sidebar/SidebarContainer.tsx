import React from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import { setPrevPath } from '../../redux/reducers/MainSlice';

const SidebarContainer = (): JSX.Element => {
    const { darkMode } = useAppSelector(state => state.profile)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function signOutProcess() {
        const auth = getAuth();
        signOut( auth ).then( () => {
            navigate( '/messenger/login' );
        } ).catch( ( error ) => {
            alert( error )
        } );
    }

    function changePrevPath(value: string) {
        dispatch(setPrevPath(value))
    }

    return (
        <Sidebar darkMode={darkMode}
                 signOutProcess={signOutProcess}
                 changePrevPath={changePrevPath}
        />
    )
}

export default SidebarContainer