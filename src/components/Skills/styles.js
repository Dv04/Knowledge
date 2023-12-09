import styled, { css } from 'styled-components';

export const SkillsContainer = styled.div`
  padding: 100px;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  flex-wrap: wrap; /* Allow skill buttons to wrap */
  gap: 20px; /* Spacing between skill buttons */
`;

export const Skill = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background-color: #0077cc;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  ${({ isSelected, ...props }) => isSelected && css`
    background-color: #005fa3;
    transform: scale(1.1);
  `}

`;

export const SkillName = styled.div`
    font - weight: bold;
`;

export const SkillDetails = styled.div`
  margin - top: 10px;
  font - size: 0.8rem;
  background - color: white;
  color: white;
  padding: 5px;
  border - radius: 5px;
`;
