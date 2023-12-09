// About/Components/ResumeDownload.js
import React from 'react';
import { DownloadLink } from './ResumeDownloadStyles';

const ResumeDownload = ({ resumeLink }) => {
    return <DownloadLink href={resumeLink} download>Download Resume</DownloadLink>;
};

export default ResumeDownload;
