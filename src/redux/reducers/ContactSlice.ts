import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    chats: any[]
}

interface ContactReducerInterface {
    userList: Array<UserListInterface>;
}

const initialState: ContactReducerInterface = {
    userList: []
}

export const ContactSlice = createSlice( {
    name: 'contact',
    initialState,
    reducers: {
        setUsers: ( state, action: PayloadAction<{users: Array<any>, payload: string}> ) => {
            state.userList = action.payload.users.filter(elem => elem.id !== action.payload.payload)
        }
    }
} )

export const { setUsers } = ContactSlice.actions

export default ContactSlice.reducer