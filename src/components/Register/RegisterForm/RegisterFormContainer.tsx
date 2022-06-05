import React, { ChangeEvent } from 'react';
import RegisterForm from './RegisterForm';
import { useAppSelector } from '../../../app/hooks';
import data from '../RegisterData/countries.json';
import dataCodes from '../RegisterData/CountryCodes.json';
import { RegisterAPI } from '../../../API/RegisterAPI/RegisterAPI';

const RegisterFormContainer = (): JSX.Element => {
    const { darkMode } = useAppSelector( state => state.profile )
    const countries = Object.keys( data )

    function getCities( country: string ) {
        let citiesArr
        for (const [key, cities] of Object.entries( data )) {
            if (country === key) {
                citiesArr = cities
            }
        }
        return citiesArr ? citiesArr : []
    }

    function getCountryCode( country: string ) {
        if (country === '') {
            return '+0'
        }
        return dataCodes.filter( ( { name } ) => {
            return name === country
        } )[0].dial_code
    }

    function checkTextField( event: ChangeEvent<HTMLInputElement> ) {
        const str = event.target.value
        if (str && str.length > 2 && str.length < 20) {
            event.currentTarget.style.outline = '1px solid #04e07b'
            return true
        } else {
            event.currentTarget.style.outline = '1px solid #ff4e4e'
            return false
        }
    }

    function checkCountryAndCity( event: ChangeEvent<HTMLSelectElement> ) {
        const str = event.target.value
        if (str !== '') {
            event.currentTarget.style.outline = '1px solid #04e07b'
            return true
        } else {
            event.currentTarget.style.outline = '1px solid #ff4e4e'
            return false
        }
    }

    function checkPhone( event: ChangeEvent<HTMLInputElement> ) {
        const re = /^\(?(\d{2})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        const str = event.target.value

        if (re.test( str )) {
            event.currentTarget.style.outline = '1px solid #04e07b'
            return true
        } else {
            event.currentTarget.style.outline = '1px solid #ff4e4e'
            return false
        }
    }

    function checkEmail( event: ChangeEvent<HTMLInputElement> ) {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const email = event.target.value
        if (validRegex.test( email )) {
            event.currentTarget.style.outline = '1px solid #04e07b'
            return true
        } else {
            event.currentTarget.style.outline = '1px solid #ff4e4e'
            return false
        }
    }

    function checkPassword( event: ChangeEvent<HTMLInputElement> ) {
        const password = event.target.value
        let validRules = 0

        const lowerCaseLetters = /[a-z]/g;
        if (lowerCaseLetters.test( password )) {
            validRules++
        } else {
            event.currentTarget.style.outline = '1px solid #ff4e4e'
        }

        const upperCaseLetters = /[A-Z]/g;
        if (upperCaseLetters.test( password )) {
            validRules++
        } else {
            event.currentTarget.style.outline = '1px solid #ff4e4e'
        }

        const numbers = /[0-9]/g;
        if (numbers.test( password )) {
            validRules++
        } else {
            event.currentTarget.style.outline = '1px solid #ff4e4e'
        }

        if (password.length >= 8 && password.length <= 16) {
            validRules++
        } else {
            event.currentTarget.style.outline = '1px solid #ff4e4e'
        }

        if (validRules === 4) {
            event.currentTarget.style.outline = '1px solid #04e07b'
        }
        return validRules
    }

    function createUser( firstName: boolean,
                         secondName: boolean,
                         country: boolean,
                         city: boolean,
                         email: boolean,
                         phone: boolean,
                         password: number,
                         checkbox: boolean,
                         passwordField: string,
                         passwordConfirmationField: string,
                         firstNameField: string,
                         secondNameField: string,
                         countryField: string,
                         cityField: string,
                         phoneField: string,
                         phoneCode: string,
                         emailField: string,
                         genderField: string,
                         gender: boolean) {
        if (!firstName) {
            return alert( `Enter your first name or check that your password matches these requirements:
-more than 2
-less or equal than 16 symbols` )
        }
        if (!secondName) {
            return alert( `Enter your second name or check that your password matches these requirements: 
-more than 2
-less or equal than 16 symbols` )
        }
        if (!country) {
            return alert( 'Select your country' )
        }
        if (!city) {
            return alert('Select your city')
        }
        if (!email) {
            return alert('Enter your email or check what email correct')
        }
        if (!phone) {
            return alert('Enter your phone number or check that number matches these pattern: 123-456-789')
        }
        if (password < 4) {
            return alert(`Your password doesn\'t enough protected check these requirements:
-1 Upper case letter
-1 Lower case letter
-more than 4 symbols
-have 1 digit`)
        }
        if(passwordField !== passwordConfirmationField) {
            return alert('Your passwords don\'t matches')
        }
        if(!gender) {
            return alert('Select gender')
        }
        if (!checkbox) {
            return alert('You need to agree with our messenger rules')
        }
        const fullName = `${firstNameField} ${secondNameField}`;
        const phoneNumber = `${phoneCode}${phoneField}`
        const fullCountry = `${countryField}, ${cityField}`
        RegisterAPI.signUp(emailField, passwordField, fullName, phoneNumber, fullCountry, genderField)
    }

    return (
        <RegisterForm darkMode={darkMode}
                      countries={countries}
                      checkEmail={checkEmail}
                      checkTextField={checkTextField}
                      checkPhone={checkPhone}
                      getCities={getCities}
                      getCountryCode={getCountryCode}
                      checkPassword={checkPassword}
                      checkCountryAndCity={checkCountryAndCity}
                      createUser={createUser}
        />
    )
}

export default RegisterFormContainer