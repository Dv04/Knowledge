import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  padding: 100px;
  text-align: center;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #31c7b2;
  margin-bottom: 2rem;
`;

export const ProjectCard = styled.div`
  display: inline-block;
  background: #222;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  width: calc(33.333% - 20px);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  button {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    background: none;
    color: #31c7b2;
    border: 2px solid #31c7b2;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #259d89;
      color: white;
    }
  }
`;
