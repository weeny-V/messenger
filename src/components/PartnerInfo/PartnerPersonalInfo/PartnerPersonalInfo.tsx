import React  from 'react';
import './PartnerPersonalInfo.scss';
import { useAppSelector } from '../../../app/hooks';

function PartnerPersonalInfo(): JSX.Element {
    const { darkMode } = useAppSelector(state => state.profile)
    const fieldInfo = [
        { field: ['Country', 'New York City, USA'] },
        { field: ['Phone', '+32 19 23 62 24 34'] },
        { field: ['Email', 'vladkruglovfencer@gmail.com'] },
    ]

    return (
        <div className={`${darkMode ? 'partner-personal--dark' : ''} partner-personal`}>
            <h3 className={`${darkMode ? 'partner-personal__topic--dark' : ''} partner-personal__topic`}
            >Personal Information</h3>
            {fieldInfo.map( ( { field }, index ) => (
                <div className='partner-personal__wrapper' key={`${index}-${field[0]}`}>
                    <span className='partner-personal__label'>{field && field[0]}</span>
                    <p className={`${darkMode ? 'partner-personal__field--dark' : ''} partner-personal__field-${field[0]} partner-personal__field`}>
                        {field && field[1]}
                    </p>
                </div>
            ) )}
        </div>
    )
}

export default PartnerPersonalInfo;