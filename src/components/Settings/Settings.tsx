import React  from 'react';
import './Settings.scss';
import SettingsBlocks from './SettingsBlocks/SettingsBlock';
import { useAppSelector } from '../../app/hooks';

function Settings():JSX.Element {
    const { darkMode } = useAppSelector(state => state.profile)

    return (
        <div className={`${darkMode ? 'settings--dark' : ''} settings`}>
            <div className='settings__wrapper'>
                <h2 className={`${darkMode ? 'settings__topic--dark' : ''} settings__topic`}
                >Settings</h2>
                <SettingsBlocks/>
            </div>
        </div>
    )
}

export default Settings;