import React from 'react';

export default function Raidwide({children}) {
    return (
        <span style={{
            color: 'red',
            fontWeight: 'bold',
            position: 'relative',
            display: 'inline-block'
        }}>
        {children}
        </span>
    );
}