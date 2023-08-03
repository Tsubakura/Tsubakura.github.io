import React from 'react';

export default function Tankbuster({children}) {
    return (
        <div style={{
            color: 'orange',
            fontWeight: 'bold',
            position: 'relative',
            display: 'inline-block'
        }}>
        {children}
        </div>
    );
}