import React, { useEffect, useState } from 'react';
import ContactUsersList from './ContactUsersList';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';
import { ref, set } from 'firebase/database';
import { realDB } from '../../../firebase';

interface ContactUserListInterface {
    searchField: string
}

interface UserListInterface {
    echo: boolean;
    noise: boolean;
    voice: boolean;
    slack: string;
    twitter: string;
    facebook: string;
    github: string;
    instagram: string;
    name: string;
    gender: string;
    status: string;
    id: string;
    email: string;
    photo: string;
    bio: string;
    phone: string;
    country: string;
    darkMode: boolean;
    fetching: boolean;
}

const ContactUsersListContainer = ( { searchField }: ContactUserListInterface ): JSX.Element => {
    const dispatch = useDispatch()
    const { userList } = useAppSelector(state => state.contact)
    const myId = useAppSelector(state => state.profile.id)
    const [searchResults, setSearchResults] = useState<UserListInterface[]>([]);
    const { darkMode, friends, id } = useAppSelector( state => state.profile )

    useEffect(() => {
        dispatch({type: 'GET_ALL_USERS', payload: id})
        const list = userList.filter(user => user.id !== id)
        setSearchResults(list)
    }, [id])

    useEffect(() => {
        const results = userList.filter(user =>
            user.name.toLowerCase().includes(searchField.toLowerCase())
        );
        setSearchResults(results);
    }, [searchField]);

    function addFriend( id: string, myId: string, name: string, photo: string ) {
        dispatch( { type: 'ADD_FRIEND', payload: { id, myId } } )

        const timestamp = Date.now();

        set(ref(realDB, `notifications/${id}/${timestamp}`), {
            username: name,
            message: `${name} wanna be your friend`,
            photo,
            id,
            type: 'FRIEND_REQUEST',
            timestamp,
            from: myId,
        });
    }

    return (
        <ContactUsersList addFriend={addFriend}
                          searchResults={searchResults}
                          myId={myId}
                          darkMode={darkMode}
                          friends={friends}
        />
    )
}

export default ContactUsersListContainer