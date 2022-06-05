import React, { RefObject } from 'react';
import GroupDetails from './GroupDetails';
import { useAppSelector } from '../../../app/hooks';
import { useDispatch } from 'react-redux';

const GroupDetailsContainer = (): JSX.Element => {
    const { darkMode, groupUsersList, id } = useAppSelector( state => state.profile )
    const dispatch = useDispatch()

    function createGroup( groupNameRef: RefObject<HTMLInputElement>,
                          tagLineRef: RefObject<HTMLInputElement>,
                          groupImageRef: RefObject<HTMLInputElement>,
                          descriptionRef: RefObject<HTMLTextAreaElement>,
                          labelRef: RefObject<HTMLLabelElement> ) {
        let rules = 0
        const group: string[] = [id]

        groupUsersList.forEach( ( { id, isAdd } ) => {
            if (isAdd) {
                group.push( id )
            }
        } )
        if (groupImageRef.current?.files?.length === 0) {
            if (labelRef.current) {
                labelRef.current.style.border = '2px solid red';
            }
            rules++
        }
        if (groupNameRef.current?.value === '') {
            groupNameRef.current.style.border = '2px solid #ff4e4e'
            rules++
        }
        if (tagLineRef.current?.value === '') {
            tagLineRef.current.style.border = '2px solid #ff4e4e'
            rules++
        }
        if (rules === 0 && group.length >= 3) {
            dispatch( {
                type: 'CREATE_GROUP_CHAT', payload: {
                    group,
                    groupName: groupNameRef.current?.value,
                    tag: tagLineRef.current?.value,
                    description: descriptionRef.current?.value || '',
                    groupImage: groupImageRef.current?.files && groupImageRef.current.files[0]
                }
            } )
        }
    }

    return (
        <GroupDetails darkMode={darkMode}
                      createGroup={createGroup}
        />
    )
}

export default GroupDetailsContainer