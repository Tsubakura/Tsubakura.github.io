import React from 'react';

export default function Raidwide({children}) {
    return (
        <div style={{
            color: 'red',
            fontWeight: 'bold',
            position: 'relative',
            display: 'inline-block'
        }}>
        {children}
        </div>
    );
}