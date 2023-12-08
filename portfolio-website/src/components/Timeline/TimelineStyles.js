import styled from 'styled-components';

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin-top: 20px;
`;

export const TimelineItem = styled.div`
  border-left: 2px solid #31c7b2;
  position: relative;
  padding-left: 20px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
`;

export const TimelineContent = styled.div`
  padding: 10px;
  border-radius: 5px;
  background: #333;
  color: #fff;
`;
