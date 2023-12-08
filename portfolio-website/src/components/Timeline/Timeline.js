// About/Components/Timeline.js
import React from 'react';
import { TimelineContainer, TimelineItem, TimelineContent } from './TimelineStyles';

const Timeline = ({ milestones }) => {
    return (
        <TimelineContainer>
            {milestones.map((milestone, index) => (
                <TimelineItem key={index}>
                    <h3>{milestone.year}</h3>
                    <TimelineContent>
                        <p>{milestone.event}</p>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </TimelineContainer>
    );
};

export default Timeline;
