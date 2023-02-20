import React, { useState } from 'react';
import styled from 'styled-components';
import { postFeedback } from '../api';

const FormContainer = styled.form`
  width: 300px;
  
  @media (min-width: 480px) {
    width: 400px;
  }

  @media (min-width: 1024px) {
    width: 457px;    
  }

  @media (min-width: 1440px) {
    width: 557px;    
  }
`;

const InputContainer = styled.div`
  margin-bottom: 8px;
`;

const TextAreaContainer = styled.div`
  margin-bottom: 23px;
`;

const FormInput = styled.input`
  box-sizing: border-box;
  font-family: 'Apercu Arabic Pro', sans-serif;
  line-height: 180%;
  padding: 30px 46px;
  width: 100%;
  height: 93px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;

  &::placeholder {
    color: #2d2d2d;    
  }
`;

const FormTextArea = styled.textarea`
  box-sizing: border-box;
  font-family: 'Apercu Arabic Pro', sans-serif;
  line-height: 180%;
  padding: 30px 46px;
  width: 100%;
  height: 189px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;  

  &::placeholder {
    color: #2d2d2d;    
  }
`;

const FormButton = styled.button`
  color: #fff;
  width: 218px;
  height: 73px;
  background: #fad34f;
  border-radius: 500px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f1ca4c;
  }
`;

const StyledH1 = styled.h1`
  margin-top: 70px;
  margin-bottom: 30px;
`;

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleName = (event) => {
    const { value } = event.target;

    setName(value);
  };

  const handleEmail = (event) => {
    const { value } = event.target;

    setEmail(value);
  };

  const handleMessage = (event) => {
    const { value } = event.target;

    setMessage(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await postFeedback(name, email, message);
      resetForm();
      alert('Thank you for your feedback!');
    } catch (error) {
      console.error(error);
      resetForm();
      alert('Failed to send message. Please try again later.');
    } 
  };

  return (
    <>
    <StyledH1>Reach out to us!</StyledH1>
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <label>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleName}
            placeholder="Your name*"
            required
          />
        </label>
      </InputContainer>
      <InputContainer>
        <label>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            placeholder="Your e-mail*"
            required
          />
        </label>
      </InputContainer>
      <TextAreaContainer>
        <label>
          <FormTextArea
            name="message"
            value={message}
            onChange={handleMessage}
            placeholder="Your message*"
            required
          />
        </label>
      </TextAreaContainer>
      <FormButton type="submit">Send message</FormButton>
    </FormContainer>
    </>
  );
};
