import React from 'react';
import './SettingsBlock.scss';
import SettingsAboutContainer from './SettingsAbout/SettingsAboutContainer';
import SettingsSoundContainer from './SettingsSound/SettingsSoundContainer';
import SettingsSocialContainer from './SettingsSocial/SettingsSocialContainer';
import SettingsPasswordContainer from './SettingsPassword/SettingsPasswordContainer';

function SettingsBlocks(): JSX.Element {
    return (
        <div className='settings__blocks'>
            <div className='settings__element'>
                <SettingsAboutContainer/>
                <SettingsSoundContainer/>
            </div>
            <div className='settings__element'>
                <SettingsPasswordContainer/>
                <SettingsSocialContainer/>
            </div>
        </div>
    )
}

export default SettingsBlocks;