import React  from 'react';
import './GroupUsers.scss';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../../app/hooks';
import { setPrevPath } from '../../../redux/reducers/MainSlice';
import { useDispatch } from 'react-redux';

interface PropsInterface {
    photo: string;
    width?: number;
    height?: number;
}

const Avatar = styled.div`
    width: ${( props: PropsInterface ) => props.width ? props.width : 43}px;
    height: ${( props: PropsInterface ) => props.height ? props.height : 43}px;;
    margin-right: 20px;
    border-radius: 50%;
    background-image: url(${( props: PropsInterface ) => props.photo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

interface GroupUserInterface {
    changeUserAddStatus: ( index: number ) => void;
    darkMode: boolean;
    groupUsersList: {
        name: string;
        photo: string;
        id: string;
        isAdd: boolean;
    }[];
    groupLoading: boolean;
}

const GroupUsers = ( { changeUserAddStatus, darkMode, groupUsersList, groupLoading }: GroupUserInterface ): JSX.Element => {
    const dispatch = useDispatch()

    if (groupLoading) {
        return (
            <div className='group-spinner__container'>
                <div className='group-spinner__loading'>
                </div>
            </div>
        )
    }

    if (!groupUsersList || groupUsersList.length === 0 ) {
        return (
            <div className='no-friends'>
                <p className='no-friends__text'>No Friends</p>
            </div>
        )
    }

    return (
        <>
            <div className='group-users'>
                {groupUsersList.map( ( user, index ) => (
                    <div className={`${darkMode ? 'group-users__person--dark' : ''} group-users__person`}
                         key={`${index}-${user.id}`}
                    >
                        <Avatar photo={user.photo}/>
                        <div className='group-users__text'>
                            <p className={`${darkMode ? 'group-users__name--dark' : ''} group-users__name`}>{user.name}</p>
                        </div>
                        <button className={`group-users__switch-btn
                        ${darkMode ? 'group-users__switch-btn--dark group-users__switch-on--dark' : ''}
                        ${user.isAdd ? 'group-users__switch-on' : ''}`}
                                onClick={() => changeUserAddStatus(index)}
                        />
                    </div>
                ) )}
            </div>
            <Link to='/messenger/groups/details'
                  className='group-users__link'
                  onClick={() => dispatch(setPrevPath('group/details'))}
            >Next</Link>
        </>
    )
}

export default GroupUsers;