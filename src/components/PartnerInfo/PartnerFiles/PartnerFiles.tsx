import React  from 'react';
import txt from '../../../assets/txt.png';
import zip from '../../../assets/zip.png';
import jpg from '../../../assets/jpg.png';
import './PartnerFiles.scss';
import { useAppSelector } from '../../../app/hooks';

function PartnerFiles(): JSX.Element {
    const { darkMode } = useAppSelector(state => state.profile)
    const data = [
        { filetype: jpg, filename: 'filename.jpg', size: '1.5 MB Image File' },
        { filetype: jpg, filename: 'filename.jpg', size: '1.5 MB Image File' },
        { filetype: txt, filename: 'filename.txt', size: '1.5 MB Text File' },
        { filetype: jpg, filename: 'filename.jpg', size: '1.5 MB Image File' },
        { filetype: zip, filename: 'filename.zip', size: '1.5 MB Archive' },
        { filetype: txt, filename: 'filename.txt', size: '1.5 MB Text File' },
        { filetype: txt, filename: 'filename.txt', size: '1.5 MB Text File' },
        { filetype: zip, filename: 'filename.zip', size: '1.5 MB Archive' },
        { filetype: zip, filename: 'filename.zip', size: '1.5 MB Archive' },
        { filetype: zip, filename: 'filename.zip', size: '1.5 MB Archive' },
        { filetype: zip, filename: 'filename.zip', size: '1.5 MB Archive' },
        { filetype: jpg, filename: 'filename.jpg', size: '1.5 MB Image File' },
        { filetype: jpg, filename: 'filename.jpg', size: '1.5 MB Image File' },
        { filetype: jpg, filename: 'filename.jpg', size: '1.5 MB Image File' },
        { filetype: jpg, filename: 'filename.jpg', size: '1.5 MB Image File' },
        { filetype: jpg, filename: 'filename.jpg', size: '1.5 MB Image File' },
        { filetype: jpg, filename: 'filename.jpg', size: '1.5 MB Image File' },
        { filetype: jpg, filename: 'filename.jpg', size: '1.5 MB Image File' },
        { filetype: jpg, filename: 'filename.jpg', size: '1.5 MB Image File' },
    ]

    return (
        <div className={`${darkMode ? 'files--dark' : ''} files`}>
            <h3 className={`${darkMode ? 'files__topic--dark' : ''} files__topic`}
            >Shared files</h3>
            {data.map( ( { filetype, filename, size }, index ) => (
                <div className={`${darkMode ? 'files__box--dark' : ''} files__box`}
                     key={`${index}-${filename}`}
                >
                    <img className='files__image' src={filetype} alt='image'/>
                    <div className='files__text'>
                        <p className={`${darkMode ? 'files__filename--dark' : ''} files__filename`}>{filename}</p>
                        <span className='files__size'>{size}</span>
                    </div>
                </div>
            ) )}
        </div>
    )
}

export default PartnerFiles;