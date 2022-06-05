import React  from 'react';
import logo from '../../../assets/logo.svg.webp';
import './Logo.scss';
import { useAppSelector } from '../../../app/hooks';

interface HeaderLogoInterface {
    isAppear: boolean;
}

function Logo( { isAppear }: HeaderLogoInterface ): JSX.Element {
    const { darkMode } = useAppSelector(state => state.profile);

    return (
        <div className={`${isAppear ? 'header__logo-appear' : ''} header__logo`}>
            <img className='header__image' src={logo} alt='messenger-logo'/>
            <h1 className={`${darkMode ? 'header__text--dark' : ''} header__text`}>messenger</h1>
        </div>
    )
}

export default Logo;