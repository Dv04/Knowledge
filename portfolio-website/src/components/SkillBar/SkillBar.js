// About/Components/SkillBar.js
import React from 'react';
import { SkillBarContainer, SkillName, SkillLevel } from './SkillBarStyles';

const SkillBar = ({ skill, level }) => {
    return (
        <SkillBarContainer>
            <SkillName>{skill}</SkillName>
            <SkillLevel level={level} />
        </SkillBarContainer>
    );
};

export default SkillBar;
