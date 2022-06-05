import React, { useEffect, useState } from 'react';
import Advantages from './Advantages';
import { useAppSelector } from '../../../app/hooks';
import { useDispatch } from 'react-redux';
import { child, get, getDatabase, onChildAdded, ref, remove, onChildRemoved } from 'firebase/database';
import { realDB } from '../../../firebase';
import { HeaderAPI } from '../../../API/HeaderAPI/HeaderAPI';
import { ContactAPI } from '../../../API/ContactAPI/ContactAPI';

const AdvantagesContainer = (): JSX.Element => {
    const dispatch = useDispatch();
    const { isLoading } = useAppSelector( state => state.main )
    const { darkMode, name, status, photo, id } = useAppSelector( state => state.profile )
    const [notifications, setNotifications] = useState<any>( [] )

    useEffect( () => {
        onChildAdded( ref( realDB, `notifications/${id}` ), ( data ) => {
            setNotifications( ( prev: any ) => [...prev, data.val()] )
        } );
        onChildRemoved( ref( realDB, `notifications/${id}` ), ( data ) => {
            const filtered = notifications.filter( ( notification: any ) => {
                return notification.timestamp !== data.val().timestamp
            } )
            setNotifications( filtered )
        } )
    }, [id] )

    useEffect( () => {
        const refDB = ref( getDatabase() )
        get( child( refDB, `notifications/${id}` ) ).then( ( snapshot ) => {
            if (snapshot.exists()) {
                for (let value of Object.values( snapshot.val() )) {
                    setNotifications( ( prev: any ) => [...prev, value] )
                }
            }
        } ).catch( ( error ) => {
            console.error( error );
        } );
    }, [] )

    function toggleDarkMode() {
        darkMode
            ? dispatch( { type: 'UPDATE_DARK_MODE', payload: false } )
            : dispatch( { type: 'UPDATE_DARK_MODE', payload: true } )
    }

    function getNotificationTime( time: number ) {
        const now = new Date()
        const nowYear = now.getFullYear()
        const date = new Date( Math.abs(time) )
        const dateYear = date.getFullYear()
        const diffMinutes = Math.floor( (+now - +date) % (86400000) % (3600000) / 60000 )
        const diffHours = Math.floor( (+now - +date) % (86400000) / 3600000 )
        const diffDays = Math.floor( (+now - +date) / 86400000 )
        if (nowYear === dateYear && now.getMonth() - date.getMonth() > 0) {
            return `${now.getMonth() - date.getMonth()} month(s) ago`
        }
        if (diffDays > 0) {
            return `${diffDays} day(s) ago`
        }
        if (diffHours >= 3 && diffHours < 24 ) {
            return `${date.getHours()}:${date.getMinutes()}`
        }
        if (diffHours > 0) {
            return `${diffHours} hours ago`
        }
        if (diffMinutes < 60) {
            return `${diffMinutes} minutes ago`
        }
        if (diffMinutes < 5) {
            return `recently`
        }
        return `${nowYear - dateYear} year(s) ago`
    }

    function removeNotification( timestamp: number, to: string, from: string, type: string ) {
        remove( ref( realDB, `notifications/${to}/${timestamp}` ) )
        if (type === 'FRIEND_REQUEST') {
            HeaderAPI.declineFriend( from, to )
        }
    }

    function acceptFriend( timestamp: number, myId: string, id: string, photo: string, name: string ) {
        dispatch( { type: 'ACCEPT_FRIEND', payload: { id, myId, photo, name, timestamp } } )
    }

    return (
        <Advantages isLoading={isLoading}
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    myName={name}
                    status={status}
                    myPhoto={photo}
                    notifications={notifications}
                    removeNotification={removeNotification}
                    getNotificationTime={getNotificationTime}
                    acceptFriend={acceptFriend}
                    myId={id}
        />
    )
}

export default AdvantagesContainer