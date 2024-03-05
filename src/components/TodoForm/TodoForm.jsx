import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

import {
  FormContainer,
  FormLabel,
  FormInput,
  ErrorMessage,
  SubmitButton,
} from './TodoForm.styled';

const MAX_LENGTH = 15;

const TodoForm = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (!todoTitle || !todoDescription) {
      setErrorMessage('Title and description are required');
      return;
    }
    if (todoTitle.length > MAX_LENGTH || todoDescription.length > MAX_LENGTH) {
      setErrorMessage(
        `Title and description must be ${MAX_LENGTH} characters or less`
      );
      return;
    }
    const todoData = {
      title: todoTitle,
      description: todoDescription,
      completed,
    };

    dispatch(addTodo(todoData));
    setTodoTitle('');
    setTodoDescription('');
    setIsFormSubmitted(true);
  };

  return (
    <>
      {!isFormSubmitted && (
        <FormContainer onSubmit={handleSubmit}>
          <FormLabel>
            Title:
            <FormInput
              type="text"
              value={todoTitle}
              onChange={e => setTodoTitle(e.target.value)}
            />
          </FormLabel>
          <br />
          <FormLabel>
            Description:
            <FormInput
              type="text"
              value={todoDescription}
              onChange={e => setTodoDescription(e.target.value)}
            />
          </FormLabel>

          <br />
          {errorMessage && (
            <ErrorMessage style={{ color: 'red' }}>{errorMessage}</ErrorMessage>
          )}
          <SubmitButton type="submit">Submit</SubmitButton>
        </FormContainer>
      )}
      {isFormSubmitted && (
        <div>
          <p>Form submitted successfully!</p>
        </div>
      )}
    </>
  );
};

export default TodoForm;
