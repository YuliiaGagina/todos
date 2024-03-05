import React, { useState } from 'react';
import {
  Button,
  Count,
  Select,
  TodoTitle,
  ListContainer,
  UpContainer,
  ListItem,
} from './TodoPart.styled';
import { useSelector } from 'react-redux';
import { getFilteredTodos } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { deleteTodo, toggleStatus } from 'redux/todoSlice';
import CreateTodo from '../CreateTodo/CreateTodo';

export const TodoPart = () => {
  const allTodos = useSelector(getFilteredTodos);
  const [filterType, setFilterType] = useState('all');
  const [todos, setTodos] = useState(allTodos);
  const dispatch = useDispatch();

  const handleToggleStatus = title => {
    dispatch(toggleStatus({ title }));
  };

  const handleDelete = title => {
    dispatch(deleteTodo(title));
  };

  useEffect(() => {
    if (filterType === 'all') {
      setTodos(allTodos);
    } else if (filterType === 'completed') {
      setTodos(allTodos.filter(todo => todo.completed));
    } else if (filterType === 'incomplete') {
      setTodos(allTodos.filter(todo => !todo.completed));
    }
  }, [allTodos, filterType]);

  const completedCount = todos.filter(todo => todo.completed).length;
  const incompleteCount = todos.length - completedCount;

  return (
    <div>
      <Count>
        Completed: {completedCount}, Incomplete: {incompleteCount}
      </Count>
      <UpContainer>
        <Select
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </Select>
        <CreateTodo />
      </UpContainer>
      <div>
        <div>
          {todos.length > 0 && (
            <div>
              <ListContainer>
                {todos.map(({ title, description, completed }) => (
                  <ListItem key={title}>
                    <div onClick={() => handleToggleStatus(title)}>
                      <TodoTitle
                        style={{
                          textDecoration: completed ? 'line-through' : 'none',
                        }}
                      >
                        {title}
                      </TodoTitle>
                      <p>{description}</p>
                    </div>
                    <Button onClick={() => handleDelete(title)}>Delete</Button>
                  </ListItem>
                ))}
              </ListContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
