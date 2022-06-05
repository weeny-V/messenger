import React  from 'react';

interface SettingsSoundInterface {
    darkMode: boolean;
    isEcho: boolean;
    isVoice: boolean;
    isNoise: boolean;
    handleEcho: (value: boolean) => void;
    handleNoise: (value: boolean) => void;
    handleVoice: (value: boolean) => void;
}

function SettingsSound({ darkMode, isEcho, isNoise, isVoice, handleEcho, handleNoise, handleVoice }: SettingsSoundInterface): JSX.Element {
    return (
        <div className={`${darkMode ? 'settings__form--dark' : ''} settings__form settings__form-appearLeft`}>
            <div className='settings__checkbox-box'>
                <p className={`${darkMode ? 'settings__checkbox-text--dark' : ''} settings__checkbox-text`}
                >Echo Cancellation <br/>
                    <span
                        className='settings__checkbox-span'>Lorem Ipsum is simply dummy text of the printing</span>
                </p>
                <div className={`settings__switch-btn 
                    ${isEcho ? 'settings__switch-on' : ''}
                    ${darkMode ? 'settings__switch-btn--dark settings__switch-on--dark' : ''}`}
                     onClick={() => isEcho ? handleEcho(false): handleEcho(true)}
                />
            </div>
            <div className='settings__checkbox-box'>
                <p className={`${darkMode ? 'settings__checkbox-text--dark' : ''} settings__checkbox-text`}
                >Noise Reduction <br/>
                    <span
                        className='settings__checkbox-span'>Lorem Ipsum has been the industry's standard</span>
                </p>
                <div className={`settings__switch-btn 
                    ${isNoise ? 'settings__switch-on' : ''}
                    ${darkMode ? 'settings__switch-btn--dark settings__switch-on--dark' : ''}`}
                     onClick={() => isNoise ? handleNoise(false) : handleNoise(true)}
                />
            </div>
            <div className='settings__checkbox-box'>
                <p className={`${darkMode ? 'settings__checkbox-text--dark' : ''} settings__checkbox-text`}
                >Advanced Voice Activity <br/>
                    <span className='settings__checkbox-span'>It was popularised in the 1960s</span>
                </p>
                <div
                    className={`settings__switch-btn 
                    ${isVoice ? 'settings__switch-on' : ''}
                    ${darkMode ? 'settings__switch-btn--dark settings__switch-on--dark' : ''}`}
                    onClick={() => isVoice ? handleVoice(false) : handleVoice(true)}
                />
            </div>
        </div>
    )
}

export default SettingsSound;