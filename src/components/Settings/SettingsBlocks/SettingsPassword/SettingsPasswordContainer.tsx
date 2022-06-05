import React  from 'react';
import SettingsPassword from './SettingsPassword';
import { useAppSelector } from '../../../../app/hooks';
import { SettingsAPI } from '../../../../API/SettingsAPI/SettingsApi';
import { useDispatch } from 'react-redux';
import { setUpload } from '../../../../redux/reducers/MainSlice';

const SettingsPasswordContainer = (): JSX.Element => {
    const { darkMode } = useAppSelector(state => state.profile)
    const { uploadingInfo } = useAppSelector(state => state.main)
    const dispatch = useDispatch()

    function validPasswords(curPassword: string, newPassword: string, confirmNewPass: string) {
        let validRules = 0

        const lowerCaseLetters = /[a-z]/g;
        if (lowerCaseLetters.test( newPassword )) {
            validRules++
        }

        const upperCaseLetters = /[A-Z]/g;
        if (upperCaseLetters.test( newPassword )) {
            validRules++
        }

        const numbers = /[0-9]/g;
        if (numbers.test( newPassword )) {
            validRules++
        }

        if (newPassword.length >= 8 && newPassword.length <= 16) {
            validRules++
        }
        if(validRules < 4) {
            return alert('Password must contain 1 uppercase letter, 1 lowercase letter, 1 digit, have more than 6 and less than 16 symbols!')
        }
        if(newPassword === confirmNewPass) {
            dispatch({type: 'UPDATE_INFO', payload: {curPassword: curPassword, newPassword: newPassword}})
        } else {
            alert('Your current password wrong or new passwords don\'t match')
        }
    }

    return (
        <SettingsPassword darkMode={darkMode}
                          validPasswords={validPasswords}
                          uploadingInfo={uploadingInfo}
        />
    )
}

export default SettingsPasswordContainer