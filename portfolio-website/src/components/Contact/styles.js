import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 100px;
  text-align: center;
`;

export const ContactH1 = styled.h1`
  color: #31c7b2;
  margin-bottom: 1rem;
`;

export const ContactForm = styled.form`
  max-width: 500px;
  margin: auto;
  background: #222;
  padding: 2rem;
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  height: 150px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #31c7b2;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #259d89;
  }
`;
