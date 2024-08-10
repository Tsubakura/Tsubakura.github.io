import React from 'react';

export default function image({children, path}) {
    return (
        <img src={`https://kitten-cdn.azureedge.net/${path}`} />
    );
}