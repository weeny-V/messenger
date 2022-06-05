import React from 'react';
import './Loading.scss';

function Loading(): JSX.Element {
    return (
        <div className="spinner-container">
            <div className="loading-spinner">
            </div>
        </div>
    )
}

export default Loading