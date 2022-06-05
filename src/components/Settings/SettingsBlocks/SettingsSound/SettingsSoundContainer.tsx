import React from 'react';
import SettingsSound from './SettingsSound';
import { useAppSelector } from '../../../../app/hooks';
import { useDispatch } from 'react-redux';
import { SettingsAPI } from '../../../../API/SettingsAPI/SettingsApi';

const SettingsSoundContainer = (): JSX.Element => {
    const dispatch = useDispatch()
    const { darkMode } = useAppSelector(state => state.profile)
    const { echo, voice, noise } = useAppSelector(state => state.profile)

    function handleEcho(value: boolean) {
        dispatch({type: 'profile/setEcho', payload: value})
        SettingsAPI.updateEcho(value)
    }

    function handleNoise(value: boolean) {
        dispatch({type: 'profile/setNoise', payload: value})
        SettingsAPI.updateNoise(value)
    }

    function handleVoice(value: boolean) {
        dispatch({type: 'profile/setVoice', payload: value})
        SettingsAPI.updateVoice(value)
    }

    return (
        <SettingsSound darkMode={darkMode}
                       isEcho={echo}
                       isNoise={noise}
                       isVoice={voice}
                       handleEcho={handleEcho}
                       handleNoise={handleNoise}
                       handleVoice={handleVoice}
        />
    )
}

export default SettingsSoundContainer