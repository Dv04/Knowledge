import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 100px;
  text-align: center;
  background: #222;
  color: #fff;
`;

export const AboutH1 = styled.h1`
  font-size: 2.5rem;
  color: #31c7b2;
  margin-bottom: 1rem;
`;

export const AboutBio = styled.p`
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

export const SkillsSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Skill = styled.span`
  background: #31c7b2;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #259d89;
  }
`;
