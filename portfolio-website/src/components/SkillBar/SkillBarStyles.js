import styled from 'styled-components';

export const SkillBarContainer = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const SkillName = styled.span`
  display: block;
  text-align: left;
  margin-bottom: 5px;
`;

export const SkillLevel = styled.div`
  height: 20px;
  background: #ddd;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ level }) => level};
    background: #31c7b2;
    transition: width 2s ease;
  }
`;
