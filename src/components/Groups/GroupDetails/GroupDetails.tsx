import React, { ChangeEvent, Ref, RefObject, useRef, useState } from 'react';
import upload from '../../../assets/upload.png'
import './GroupDetails.scss';
import styled from 'styled-components';

interface PropsInterface {
    photo: string;
}

const Avatar = styled.div`
    width: 43px;
    height: 43px;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 50%;
    background-image: url(${( props: PropsInterface ) => props.photo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

interface GroupDetailsInterface {
    darkMode: boolean;
    createGroup: (groupNameRef: RefObject<HTMLInputElement>,
                  tagLineRef: RefObject<HTMLInputElement>,
                  groupImageRef: RefObject<HTMLInputElement>,
                  descriptionRef: RefObject<HTMLTextAreaElement>,
                  labelRef: RefObject<HTMLLabelElement>) => void;
}

function GroupDetails( { darkMode, createGroup }: GroupDetailsInterface ): JSX.Element {
    const [groupImage, setGroupImage] = useState<Blob|string>(upload)
    const [groupName, setGroupName] = useState('')
    const [tagLine, setTagLine] = useState('')
    const [description, setDescription] = useState('')
    const groupImageRef = useRef<HTMLInputElement>(null)
    const groupNameRef = useRef<HTMLInputElement>(null)
    const tagLineRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLTextAreaElement>(null)
    const labelRef = useRef<HTMLLabelElement>(null)

    return (
        <div className={`${darkMode ? 'details--dark' : ''} details`}>
            <label className={`${darkMode ? 'details__label--dark' : ''} 'details__label`}
                   htmlFor='detailsUpload'
            >Photo</label>
            <label className={`${darkMode ? 'details__label-upload--dark' : ''} details__label-upload`}
                   htmlFor='detailsUpload'
                   ref={labelRef}
            >
                <Avatar photo={typeof groupImage === 'string' ? groupImage : upload}/>
                <p className='details__text'>Choose your group profile photo</p>
            </label>
            <input className='details__upload'
                   type='file'
                   ref={groupImageRef}
                   id='detailsUpload'
                   onChange={( e: ChangeEvent<HTMLInputElement> ) => {
                       if (e.target.files) {
                           setGroupImage( URL.createObjectURL( e.target.files[0] ) )
                       }
                   }}
            />
            <label className={`${darkMode ? 'details__label--dark' : ''} details__label`}>Group Name</label>
            <input className={`${darkMode ? 'details__input--dark' : ''} details__input`}
                   type='text'
                   ref={groupNameRef}
                   value={groupName}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setGroupName(e.target.value)}
            />
            <label className={`${darkMode ? 'details__label--dark' : ''} details__label`}>Tagline</label>
            <input className={`${darkMode ? 'details__input--dark' : ''} details__input`}
                   type='text'
                   ref={tagLineRef}
                   value={tagLine}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setTagLine(e.target.value)}
            />
            <label className={`${darkMode ? 'details__label--dark' : ''} details__label`}>Description</label>
            <textarea className={`${darkMode ? 'details__textarea--dark' : ''} details__textarea`}
                      rows={5}
                      ref={descriptionRef}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            />
            <button className='details__create'
                    type='button'
                    value={description}
                    onClick={() => createGroup(groupNameRef, tagLineRef, groupImageRef, descriptionRef, labelRef)}
            >Create Group</button>
        </div>
    )
}

export default GroupDetails;