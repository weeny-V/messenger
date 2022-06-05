import React from 'react';
import Logo from './Logo/Logo';
import './Header.scss'
import { useParams } from 'react-router-dom';
import AdvantagesContainer from './Advantages/AdvantagesContainer';

interface HeaderInterface {
    darkMode: boolean;
}

function Header( { darkMode }: HeaderInterface ): JSX.Element {
    const { tab } = useParams()

    return (
        <>
            {tab !== 'login' && tab !== 'register'
                && (
                    <div className={`header ${darkMode ? 'header--dark' : ''}`}>
                        <Logo isAppear={false}/>
                        <AdvantagesContainer/>
                    </div>
                )
            }
        </>
    )
}

export default Header;