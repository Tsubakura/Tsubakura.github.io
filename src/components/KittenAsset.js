import React from 'react';
import ReactPlayer from 'react-player'

export default function image({children, path, wrapper = 'span', width}) {
    let assetURL = 'https://ffxivkittenassets.z7.web.core.windows.net/'
    return (
        path.endsWith("webm") ? <ReactPlayer url={`${assetURL}${path}`} wrapper={wrapper} playsinline={true} muted={true} loop={true} controls={true} playing={true} /> : (width) ? <img src={`${assetURL}${path}`} width={width} /> : <img src={`${assetURL}${path}`} />
    );
}