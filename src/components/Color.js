import React from 'react';

export default function Color({children, color}) {
    return (
        <span style={{
            color: color,
            fontWeight: 'bold',
            position: 'relative',
            display: 'inline-block'
        }}>
        {children}
        </span>
    );
}