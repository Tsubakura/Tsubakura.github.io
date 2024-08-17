import React from 'react';

export default function image({children, path}) {
    return (
        <img src={`https://ffxivkittenassets.z7.web.core.windows.net/${path}`} />
    );
}