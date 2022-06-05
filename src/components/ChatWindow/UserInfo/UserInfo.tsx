import React  from 'react';
import user from '../../../assets/user.png';
import './UserInfo.scss';
import points from '../../../assets/points.png';
import { useAppSelector } from '../../../app/hooks';
import styled from 'styled-components';

interface WindowUserInfoInterface {
    setIsOpen: (bool:boolean) => void;
}

interface AvatarInterface {
    photo: string;
    width: number;
    height: number;
}

const Avatar = styled.div`
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background-image: url(${( props: AvatarInterface ) => props.photo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 20px;
`

function UserInfo({ setIsOpen }: WindowUserInfoInterface): JSX.Element {
    const { darkMode, currentChat } = useAppSelector(state => state.profile)

    return (
        <div className={`${darkMode ? 'user-info--dark' : ''} user-info`}>
            <Avatar photo={currentChat[0].photo}/>
            <div className='user-info__text'>
                <p className={`${darkMode ? 'user-info__name--dark' : ''} user-info__name`}>{currentChat[0].name}</p>
                <span className='user-info__online'>online</span>
            </div>
            <div className='user-info__buttons'>
                <label className='user-info__label user-info__upload' htmlFor='upload'/>
                <label className='user-info__label user-info__voice' htmlFor='voice'/>
                <input className='user-info__input' type='file' id='upload'/>
                <input className='user-info__input' type='text' id='voice'/>
                <button className='user-info__else'>
                    <img className='user-info__icon' src={points} alt='three points'/>

                </button>
                <div className={`${darkMode  ? 'user-info__popUp--dark' : ''} user-info__popUp`}>
                    <button className={`${darkMode ? 'user-info__popUp-noMargin--dark' : ''} user-info__popUp-noMargin`}
                            onClick={() => setIsOpen(true)}
                    >user Info</button>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;