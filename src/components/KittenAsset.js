import React from 'react';
import ReactPlayer from 'react-player'

export default function image({children, path, wrapper = 'span', width}) {
    //'https://ffxivkittenassets.z7.web.core.windows.net/'
    //https://ffxivkittenassetcdn.azureedge.net/
    //https://ffxivkittenassetcdn-h6e7b4h5bbfxakgm.z01.azurefd.net/
    let assetURL = 'https://ffxivkittenassetcdn-h6e7b4h5bbfxakgm.z01.azurefd.net/'
    return (
        path.endsWith("webm") ? <ReactPlayer url={`${assetURL}${path}`} wrapper={wrapper} playsinline={true} muted={true} loop={true} controls={true} playing={true} /> : (width) ? <img src={`${assetURL}${path}`} width={width} /> : <img src={`${assetURL}${path}`} />
    );
}