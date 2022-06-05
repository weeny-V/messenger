import React from 'react';
import SettingsSocial from './SettingsSocial';
import { useAppSelector } from '../../../../app/hooks';
import { useDispatch } from 'react-redux';
import { SettingsAPI } from '../../../../API/SettingsAPI/SettingsApi';

const SettingsSocialContainer = (): JSX.Element => {
    const dispatch = useDispatch()
    const { darkMode } = useAppSelector( state => state.profile )
    const { uploadingInfo } = useAppSelector(state => state.main)

    function handleTwitter( value: string ) {
        if (value.length > 4) {
            dispatch( { type: 'profile/setTwitter', payload: value } )
            SettingsAPI.updateTwitter( value )
        }
    }

    function handleFacebook( value: string ) {
        if (value.length > 4) {
            dispatch( { type: 'profile/setFacebook', payload: value } )
            SettingsAPI.updateFacebook( value )
        }

    }

    function handleInstagram( value: string ) {
        if (value.length > 4) {
            dispatch( { type: 'profile/setInstagram', payload: value } )
            SettingsAPI.updateInstagram( value )
        }

    }

    function handleGithub( value: string ) {
        if (value.length > 4) {
            dispatch( { type: 'profile/setGithub', payload: value } )
            SettingsAPI.updateGithub( value )
        }

    }

    function handleSlack( value: string ) {
        if (value.length > 4) {
            dispatch( { type: 'profile/setSlack', payload: value } )
            SettingsAPI.updateSlack( value )
        }
    }

    function saveSettings( twitter: string, facebook: string, instagram: string, github: string, slack: string ) {
        handleTwitter(twitter)
        handleFacebook(facebook)
        handleInstagram(instagram)
        handleGithub(github)
        handleSlack(slack)
    }

    return (
        <SettingsSocial darkMode={darkMode}
                        saveSettings={saveSettings}
                        uploadingInfo={uploadingInfo}
        />
    )
}

export default SettingsSocialContainer