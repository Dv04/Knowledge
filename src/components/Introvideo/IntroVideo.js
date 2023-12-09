// About/Components/IntroVideo.js
import React from 'react';
import { VideoContainer } from './IntroVideoStyles';

const IntroVideo = ({ videoSrc }) => {
    return (
        <VideoContainer>
            <video src={videoSrc} controls />
        </VideoContainer>
    );
};

export default IntroVideo;
