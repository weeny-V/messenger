import React, { ChangeEvent, useState } from 'react';
import './RegisterForm.scss';
import { Link } from 'react-router-dom';

interface RegisterFormInterface {
    darkMode: boolean;
    countries: Array<string>;
    getCities: ( country: string ) => Array<string>;
    checkEmail: ( event: ChangeEvent<HTMLInputElement> ) => boolean;
    checkTextField: ( event: ChangeEvent<HTMLInputElement> ) => boolean;
    checkPhone: ( event: ChangeEvent<HTMLInputElement> ) => boolean;
    getCountryCode: ( country: string ) => string;
    checkPassword: ( event: ChangeEvent<HTMLInputElement> ) => number;
    checkCountryAndCity: ( event: ChangeEvent<HTMLSelectElement> ) => boolean;
    createUser: ( firstName: boolean,
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
                  validGender: boolean,) => void;
}

function RegisterForm( {
                           darkMode,
                           countries,
                           checkEmail,
                           checkTextField,
                           checkPhone,
                           getCities,
                           getCountryCode,
                           checkPassword,
                           checkCountryAndCity,
                           createUser
                       }: RegisterFormInterface ): JSX.Element {
    const [firstName, setFirstName] = useState( '' )
    const [secondName, setSecondName] = useState( '' )
    const [email, setEmail] = useState( '' )
    const [phone, setPhone] = useState( '' )
    const [country, setCountry] = useState( '' )
    const [city, setCity] = useState( '' )
    const [password, setPassword] = useState( '' )
    const [passwordConfirm, setPasswordConfirm] = useState( '' )
    const [checkbox, setCheckbox] = useState( false )
    const [phoneCode, setPhoneCode] = useState( '' )
    const [gender, setGender] = useState('')
    const [passwordSecurity, setPasswordSecurity] = useState( 0 )
    const [validFirstName, setValidFirstName] = useState( false )
    const [validSecondName, setValidSecondName] = useState( false )
    const [validEmail, setValidEmail] = useState( false )
    const [validPhone, setValidPhone] = useState( false )
    const [validCountry, setValidCountry] = useState( false )
    const [validCity, setValidCity] = useState( false )
    const [validGender, setValidGender] = useState(false)

    return (
        <form className={`${darkMode ? 'register-form--dark' : ''} register-form`}>
            <div className='register-form__input-wrapper'>
                <input className={`${darkMode ? 'register-form__input--dark' : ''} register-form__input`}
                       type='text'
                       placeholder='First Name'
                       required={true}
                       value={firstName}
                       onChange={( e: ChangeEvent<HTMLInputElement> ) => {
                           setFirstName( e.target.value )
                           setValidFirstName( checkTextField( e ) )
                       }}
                />
                <input className={`${darkMode ? 'register-form__input--dark' : ''} register-form__input`}
                       type='text'
                       placeholder='Second Name'
                       required={true}
                       value={secondName}
                       onChange={( e: ChangeEvent<HTMLInputElement> ) => {
                           setSecondName( e.target.value )
                           setValidSecondName( checkTextField( e ) )
                       }}
                />
                <select className={`${darkMode ? 'register-form__select--dark' : ''} register-form__select`}
                        value={country}
                        onChange={( e: ChangeEvent<HTMLSelectElement> ) => {
                            setCountry( e.target.value )
                            setPhoneCode( getCountryCode( e.target.value ) )
                            setValidCountry( checkCountryAndCity( e ) )
                        }}
                >
                    <option value=''>Country</option>
                    {
                        countries.map( ( name, id ) => (
                            <option value={name} key={`${id}-${name}`}>{name}</option>
                        ) )
                    }
                </select>
                <select id='city-picker'
                        className={`${darkMode ? 'register-form__select--dark' : ''} register-form__select`}
                        value={city}
                        disabled={country === ''}
                        onChange={( e: ChangeEvent<HTMLSelectElement> ) => {
                            setCity( e.target.value )
                            setValidCity( checkCountryAndCity( e ) )
                        }}
                >
                    <option value={''}>City</option>
                    {
                        getCities( country ).map( ( city, index ) => (
                            <option value={city} key={`${index}-${city}`}>{city}</option>
                        ) )
                    }
                </select>
                <input className={`${darkMode ? 'register-form__input--dark' : ''} register-form__input`}
                       type='email'
                       placeholder='Email'
                       required={true}
                       value={email}
                       onChange={( e: ChangeEvent<HTMLInputElement> ) => {
                           setEmail( e.target.value )
                           setValidEmail( checkEmail( e ) )
                       }}
                />
                <div className='phone-container'>
                    <label className={`${darkMode ? 'phone-code--dark' : ''} phone-code`}>{phoneCode === '' ? '+0' : phoneCode}</label>
                    <input
                        className={`${darkMode ? 'register-form__input--dark' : ''} register-form__input phone-number`}
                        type='tel'
                        placeholder='Phone number'
                        required={true}
                        value={phone}
                        disabled={phoneCode === ''}
                        onChange={( e: ChangeEvent<HTMLInputElement> ) => {
                            setPhone( e.target.value )
                            setValidPhone( checkPhone( e ) )
                        }}
                    />
                </div>
                <input className={`${darkMode ? 'register-form__input--dark' : ''} register-form__input`}
                       type='password'
                       placeholder='Password'
                       value={password}
                       onChange={( e: ChangeEvent<HTMLInputElement> ) => {
                           setPassword( e.target.value )
                           setPasswordSecurity( checkPassword( e ) )
                       }}
                       required={true}
                />
                <input className={`${darkMode ? 'register-form__input--dark' : ''} register-form__input`}
                       type='password'
                       placeholder='Password Confirmation'
                       value={passwordConfirm}
                       onChange={( e: ChangeEvent<HTMLInputElement> ) => setPasswordConfirm( e.target.value )}
                       required={true}
                />
            </div>
            <div className='register-form__wrapper'>
                <div
                    className={`${darkMode ? 'register-form__secure--dark' : ''} ${passwordSecurity - 1 >= 0 ? 'register-form__secure-green' : ''} 
                register-form__secure`}/>
                <div
                    className={`${darkMode ? 'register-form__secure--dark' : ''} ${passwordSecurity - 2 >= 0 ? 'register-form__secure-green' : ''}
                 register-form__secure`}/>
                <div
                    className={`${darkMode ? 'register-form__secure--dark' : ''} ${passwordSecurity - 3 >= 0 ? 'register-form__secure-green' : ''}
                 register-form__secure`}/>
                <div
                    className={`${darkMode ? 'register-form__secure--dark' : ''} ${passwordSecurity - 4 >= 0 ? 'register-form__secure-green' : ''}
                 register-form__secure`}/>
            </div>
            <select className={`${darkMode ? 'register-form__select--dark' : ''} register-form__select register-form__select--gender`}
                    value={gender}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                        setGender( e.target.value )
                        setValidGender( checkCountryAndCity( e ) )
                    }}
            >
                <option value={''}>Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>
            <span className={`${darkMode ? 'register-form__clue--dark' : ''} register-form__clue`}
                  title=''>What is a secure password?</span>
            <input className='custom-checkbox'
                   id='checkbox-1'
                   type='checkbox'
                   onChange={() => checkbox ? setCheckbox( false ) : setCheckbox( true )}
                   required={true}
            />
            <label className={`${darkMode ? 'register-form__label--dark' : ''} register-form__label`}
                   htmlFor='checkbox-1'>
                I agree to the Messenger <span className='register-form__policy'>Privacy Policy</span>
            </label>
            <button className='register-form__btn register-form__register-btn'
                    type='button'
                    onClick={() => createUser( validFirstName,
                        validSecondName,
                        validCountry,
                        validCity,
                        validEmail,
                        validPhone,
                        passwordSecurity,
                        checkbox,
                        password,
                        passwordConfirm,
                        firstName,
                        secondName,
                        country,
                        city,
                        phone,
                        phoneCode,
                        email,
                        gender,
                        validGender)}
            >Register
            </button>
            <Link to='/messenger/login'
                  className={`${darkMode ? 'register-form__sign-in--dark' : ''} register-form__btn register-form__sign-in`}
            >Sign in</Link>
        </form>
    )
}

export default RegisterForm;