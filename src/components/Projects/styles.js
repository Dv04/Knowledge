import styled from "styled-components";

export const ProjectsContainer = styled.div`
  padding: 100px;
  gap: 20px;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #31c7b2;
  margin-bottom: 2rem;
`;

export const ProjectsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

export const ProjectCard = styled.div`


  background: #222;
  padding: 20px;
  border: 1px solid white
  border-radius: 10px;
  margin: 10px;
  width: calc(33.333% - 20px);
  min-width: 300px;
  overflow: hidden;
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
  margin-bottom: 20px;

  button {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    background: none;
    color: #31c7b2;
    border: 1px solid #31c7b2;
    font-size: 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
    &:hover {
      background-color: #259d89;
      color: white;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  color: #666;
`;

export const ProjectInfo = styled.div`
  padding: 15px;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  color: white;
`;

export const ProjectDescription = styled.p`
  color: #666;
`;

export const ProjectLinks = styled.div`
  margin-top: 10px;
`;

export const ProjectLink = styled.a`
  margin-right: 10px;
  color: #31c7b2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
