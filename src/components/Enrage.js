import React from 'react';

export default function Enrage({children}) {
    return (
        <span style={{
            color: 'darkred',
            fontWeight: 'bold',
            position: 'relative',
            display: 'inline-block'
        }}>
        {children}
        </span>
    );
}