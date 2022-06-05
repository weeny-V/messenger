import React  from 'react';
import './Groups.scss';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import { setPrevPath } from '../../redux/reducers/MainSlice';

function Groups(): JSX.Element {
    const { darkMode } = useAppSelector(state => state.profile)
    const dispatch = useDispatch()

    return (
        <div className={`${darkMode ? 'group__wrapper--dark' : ''} group__wrapper`}>
            <div className='group'>
                <h2 className={`${darkMode ? 'group__topic group__topic--dark' : ''} group__topic`}>Create Group</h2>
                <div className={`${darkMode ? 'group__buttons group__buttons--dark' : ''} group__buttons`}>
                    <NavLink to='member'
                             className={({isActive}) => isActive
                                 ? 'group__btn group__btn-active group__member'
                                 : `${darkMode ? 'group__btn--dark' : ''} group__btn group__member`
                             }
                    >Member</NavLink>
                    <NavLink to='details'
                             onClick={() => dispatch(setPrevPath('group/details'))}
                             className={({isActive}) => isActive
                                 ? 'group__btn group__btn-active group__member'
                                 : `${darkMode ? 'group__btn--dark' : ''} group__btn group__member`
                             }
                    >Details</NavLink>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Groups;