import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 100px;
  background: #444;
  text-align: center;
`;

export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #31c7b2;
  margin-bottom: 1rem;
`;

export const ContactForm = styled.form`
  max-width: 500px;
  margin: auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;
  height: 150px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #31c7b2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #259d89;
  }
`;
