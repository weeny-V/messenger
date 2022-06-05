import React, { useState } from 'react';
import notification from '../../../assets/notification.png';
import './Advantages.scss';
import Loading from '../../Loading/Loading';
import styled from 'styled-components';
import check from '../../../assets/check.png';
import decline from '../../../assets/remove.png'
import deleteIcon from '../../../assets/delete.png'

interface AdvantagesInterface {
    myName: string;
    status: string;
    myPhoto: Blob | string;
    isLoading: boolean;
    darkMode: boolean;
    toggleDarkMode: () => void;
    notifications: Array<{
        name: string;
        photo: string;
        message: string;
        type: string
    }>,
    removeNotification: ( timestamp: number, notifID: string, from: string, type: string ) => void;
    getNotificationTime: ( time: number ) => string;
    acceptFriend: ( timestamp: number, to: string, from: string, photo: string, name: string ) => void;
    myId: string;
}

interface AvatarInterface {
    photo: string;
}

const Avatar = styled.div`
    width: 38px;
    height: 38px;
    margin-right: 15px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${( props: AvatarInterface ) => props.photo});
`

function Advantages( {
                         darkMode,
                         isLoading,
                         toggleDarkMode,
                         myName,
                         status,
                         myPhoto,
                         notifications,
                         removeNotification,
                         getNotificationTime,
                         acceptFriend,
                         myId,
                     }: AdvantagesInterface ): JSX.Element {
    const [isOpen, setIsOpen] = useState( false )

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div className='advantages'>
            <div className='advantages__dark-mode'>
                <p className={`${darkMode ? 'advantages__label--dark' : ''} advantages__label`}>Dark theme</p>
                <div className={`${darkMode ? 'advantages__switch-on' : ''} advantages__switch-btn`}
                     onClick={toggleDarkMode}
                />
            </div>
            <button className='advantages__invite-btn'>Invite Friends</button>
            <div className={`${darkMode ? 'advantages__notification--dark' : ''} advantages__notification`}
                 onClick={() => setIsOpen( prevState => !prevState )}
            >
                <img className='advantages__image'
                     src={notification} alt='notification'
                />
                {
                    notifications.length !== 0
                        ? (
                            <div className='advantages__notification-length'>{notifications.length}</div>
                        ) : null
                }
                {isOpen && (
                    <div className={`${darkMode ? 'notification-box--dark' : ''} notification-box`}>
                        <h4 className={`${darkMode ? 'notification-box__topic--dark' : ''} notification-box__topic`}>Notification</h4>
                        {notifications.length === 0
                            ? (
                                <div className={`notification-box__no-notifications`}>
                                    <p className={`notification-box__no-text`}>No any notifications</p>
                                </div>
                            ) : (
                                <>
                                    <ul className={`notification-box__list`}>
                                        {notifications.map( ( {
                                                                  timestamp,
                                                                  id,
                                                                  from,
                                                                  message,
                                                                  photo,
                                                                  type,
                                                                  username,
                                                              }: any, index: any ) => (
                                            <li className={`${darkMode ? 'notification-box__item--dark' : ''} notification-box__item`}
                                                key={index}
                                            >
                                                <div className={`notification-box__delete`}
                                                     onClick={( e: React.MouseEvent<HTMLDivElement> ) => {
                                                         e.stopPropagation()
                                                         removeNotification( timestamp, myId, from, type )
                                                     }}
                                                >
                                                    <img className={`notification-box__delete-icon`} src={deleteIcon}
                                                         alt='delete'/>
                                                </div>
                                                <div
                                                    className={`notification-box__time`}>{getNotificationTime( timestamp )}</div>
                                                <div className={`notification-box__user-info`}>
                                                    <Avatar photo={photo}/>
                                                    {message}
                                                </div>
                                                {
                                                    type === 'FRIEND_REQUEST'
                                                        ? (
                                                            <div className={`notification-box__btn-container`}>
                                                                <button className={`notification-box__btn-icon`}
                                                                        type='button'
                                                                        onClick={( e: React.MouseEvent<HTMLButtonElement> ) => {
                                                                            e.stopPropagation()
                                                                            acceptFriend( timestamp, id, from, photo, username )
                                                                        }}
                                                                >
                                                                    <img className={`notification-box__icon`}
                                                                         src={check}
                                                                         alt='accept'
                                                                    />
                                                                </button>
                                                                <button className={`notification-box__btn-icon`}
                                                                        type='button'
                                                                        onClick={( e: React.MouseEvent<HTMLButtonElement> ) => {
                                                                            e.stopPropagation()
                                                                            removeNotification( timestamp, id, from, type )
                                                                        }}
                                                                >
                                                                    <img className={`notification-box__icon`}
                                                                         src={decline}
                                                                         alt='decline'
                                                                    />
                                                                </button>
                                                            </div>
                                                        ) : null
                                                }
                                            </li>
                                        ) )}
                                    </ul>
                                    {/*<button*/}
                                    {/*    className={`${darkMode ? 'notification-box__clear-all--dark' : ''} notification-box__clear-all`}*/}
                                    {/*    type='button'*/}
                                    {/*>CLEAR ALL*/}
                                    {/*</button>*/}
                                </>
                            )}
                    </div>
                )}
            </div>
            <div className='advantages__profile'>
                <Avatar photo={myPhoto}/>
                <div className='advantages__info'>
                    <span
                        className={`${darkMode ? 'advantages__name--dark' : ''} advantages__name`}>{`${myName}`}</span>
                    <span className={`${darkMode ? 'advantages__status--dark' : ''} advantages__status`}>
                                {status !== null ? status : ''}
                            </span>
                </div>
            </div>
        </div>
    )
}

export default Advantages;