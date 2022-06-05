import React  from 'react';
import './ContactUsersList.scss';
import points from '../../../assets/points.png';
import addUser from '../../../assets/add-user.png';
import check from '../../../assets/check.png'
import styled from 'styled-components';
import { useAppSelector } from '../../../app/hooks';

interface PropsInterface {
    photo: string;
    width?: number;
    height?: number;
}

const Avatar = styled.div`
    width: ${(props:PropsInterface) => props.width ? props.width : 43}px;
    height: ${(props:PropsInterface) => props.height ? props.height : 43}px;;
    margin-right: 20px;
    border-radius: 50%;
    background-image: url(${( props: PropsInterface ) => props.photo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

interface ContactUserListInterface {
    addFriend: (id: string, myId: string, name: string, photo: string) => void;
    searchResults: Array<any>
    myId: string;
    darkMode: boolean;
    friends: string[];
}

function ContactUsersList( { addFriend, searchResults, myId, darkMode, friends }: ContactUserListInterface ): JSX.Element {
    const myName = useAppSelector(state => state.profile.name)
    const myPhoto = useAppSelector(state => state.profile.photo)

    if(searchResults.length === 0) {
        return (
            <div className={`not-found`}>
                <p>Not Found</p>
            </div>
        )
    }

    return (
        <ul className='contact-users'>
            {searchResults.map( ( { photo, name, id, gender, status, email, country, facebook, instagram, github, slack, twitter }, index ) => (
                <li className={`${darkMode ? 'contact-users__person--dark' : ''} contact-users__person`}
                    key={`${index}-${name.replace( ' ', '' )}`}
                >
                    <Avatar photo={photo}/>
                    <div className='contact-users__text'>
                        <p className={`contact-users__name
                        ${darkMode ? 'contact-users__name--dark' : ''}`
                        }>{name}</p>
                        <span
                            className={`${darkMode ? 'contact-users__lastSeen--dark' : ''} contact-users__lastSeen`}>{'3:20PM'}</span>
                    </div>
                    <div className='contact-users__points'>
                        <img className='contact-users__iconPoints' src={points} alt='photo'/>
                    </div>
                    <div className={`${darkMode ? 'contact-users__popUp--dark' : ''} contact-users__popUp`}>
                        {
                            !friends.some(uid => uid === id)
                            ? (
                                <img className='contact-users__popUp-icon contact-users__popUp-icon-add' src={addUser} alt='icon'
                                     onClick={() => {
                                         addFriend(id, myId, myName, myPhoto)
                                     }}
                                />
                            ) : (
                                <img className='contact-users__popUp-icon contact-users__popUp-icon-check' src={check} alt='icon'/>
                            )
                        }
                        <button className={`${darkMode ? 'contact-users__popUp-btn--dark' : ''} contact-users__popUp-btn`}>User info</button>
                    </div>
                </li>
            ) )}
        </ul>
    )
}

export default ContactUsersList;