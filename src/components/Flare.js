import React from 'react';

export default function Flare({children}) {
    return (
        <span style={{
            color: 'purple',
            fontWeight: 'bold',
            position: 'relative',
            display: 'inline-block'
        }}>
        {children}
        </span>
    );
}