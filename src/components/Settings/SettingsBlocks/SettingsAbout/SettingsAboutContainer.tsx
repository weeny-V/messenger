import React from 'react';
import SettingsAbout from './SettingsAbout';
import { useAppSelector } from '../../../../app/hooks';
import { useDispatch } from 'react-redux';
import { SettingsAPI } from '../../../../API/SettingsAPI/SettingsApi';

const SettingsAboutContainer = (): JSX.Element => {
    const dispatch = useDispatch()
    const { darkMode } = useAppSelector( state => state.profile )
    const { uploadingInfo } = useAppSelector(state => state.main)

    function handlePhotoSubmit( url: File, dispatch: any) {
        if ( url ) {
            SettingsAPI.updatePhotoToStorage(url, dispatch)
        }
    }

    function handleNameSubmit( value: string ) {
        if (value !== '' && value) {
            dispatch( { type: `profile/setName`, payload: value } )
            SettingsAPI.updateName( value )
        }
    }

    function handleStatusSubmit( value: string ) {
        if (value !== '' && value) {
            dispatch( { type: `profile/setStatus`, payload: value } )
            SettingsAPI.updateStatus( value )
        }
    }

    function handleEmailSubmit( value: string ) {
        if (value !== '' && value) {
            dispatch( { type: `profile/setEmail`, payload: value } )
            SettingsAPI.updateEmail( value )
        }
    }

    function handlePhoneSubmit( value: string ) {
        if (value !== '' && value) {
            dispatch( { type: `profile/setPhone`, payload: value } )
            SettingsAPI.updatePhone( value )
        }
    }

    function handleBioSubmit( value: string ) {
        if (value !== '' && value) {
            dispatch( { type: `profile/setBio`, payload: value } )
            SettingsAPI.updateBio( value )
        }
    }

    function saveSettings( url: any, name: string, status: string, phone: string, email: string, bio: string, dispatch: any ) {
        handlePhotoSubmit( url, dispatch )
        handleNameSubmit( name )
        handleStatusSubmit( status )
        handlePhoneSubmit( phone )
        handleEmailSubmit( email )
        handleBioSubmit( bio )
    }

    return (
        <SettingsAbout darkMode={darkMode}
                       saveSettings={saveSettings}
                       uploadingInfo={uploadingInfo}
        />
    )
}

export default SettingsAboutContainer;