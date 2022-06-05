import React  from 'react';
import './PartnerInfo.scss';
import PartnerAvatar from './PartnerAvatar/PartnerAvatar';
import PartnerPersonalInfo from './PartnerPersonalInfo/PartnerPersonalInfo';
import PartnerFiles from './PartnerFiles/PartnerFiles';
import closeArrow from '../../assets/arrow-right.png';
import { useAppSelector } from '../../app/hooks';

interface PartnerInfoInterface {
    setIsOpen: (bool:boolean) => void;
}

function PartnerInfo({ setIsOpen }: PartnerInfoInterface): JSX.Element {
    const { darkMode } = useAppSelector(state => state.profile)

    return (
        <div className={`${darkMode ? 'partner__wrapper--dark' : ''} partner__wrapper`}>
            <div className='partner'>
                <div className='close-button' onClick={() => setIsOpen(false)}>
                    <img className='close-icon' src={closeArrow} alt='close'/>
                </div>
                <PartnerAvatar/>
                <PartnerPersonalInfo/>
                <PartnerFiles/>
            </div>
        </div>
    )
}

export default PartnerInfo;