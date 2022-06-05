import React, { useEffect } from 'react';
import GroupUsers from './GroupUsers';
import { useDispatch } from 'react-redux';
import { changeStatusGroup } from '../../../redux/reducers/ProfileSlice';
import { useAppSelector } from '../../../app/hooks';

const GroupUsersContainer = (): JSX.Element => {
    const { darkMode, friends, groupUsersList, groupLoading } = useAppSelector( state => state.profile )
    const { prevPath } = useAppSelector(state => state.main)
    const dispatch = useDispatch()

    useEffect( () => {
        if(prevPath === null || prevPath !== 'group/details') {
            dispatch( { type: 'SET_FRIEND_LIST', payload: friends } )
        }
    }, [friends] )

    function changeUserAddStatus( index: number ) {
        dispatch( changeStatusGroup( index ) )
    }

    return (
        <GroupUsers changeUserAddStatus={changeUserAddStatus}
                    darkMode={darkMode}
                    groupUsersList={groupUsersList}
                    groupLoading={groupLoading}
        />
    )
}

export default GroupUsersContainer