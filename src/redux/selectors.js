import { createSelector } from '@reduxjs/toolkit';

export const getTodos = state => state.todos.todos

export const getFilter = state => state.filter.value

export const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    switch (filter) {
      case 'completed': {
        return todos.filter(todo => todo.completed)
      }
      case 'incomplete': {
        return todos.filter(todo => !todo.completed)
      }
      default: {
        return todos
      }
    }
  }
)

export const getIsloading = state => state.contacts.isLoading
