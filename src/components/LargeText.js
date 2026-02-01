import React from 'react';

export default function LargeText({children}) {
    return (
        <span style={{
            fontSize: '54px'
        }}>
        {children}
        </span>
    );
}