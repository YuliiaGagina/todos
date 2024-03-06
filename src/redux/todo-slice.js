import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  'todos': [],
  'isLoading': false,
  'error': undefined, 
}

const todoSlice = createSlice({
  'name': 'todos',

  initialState, 
  'reducers': {
    'addTodo': (state, action) => {
      state.todos.push(action.payload)
    },
    'deleteTodo': (state, action) => {
      state.todos = state.todos.filter(item => item.title !== action.payload)
    },
    'toggleStatus': (state, action) => {
      const { title } = action.payload
      const todo = state.todos.find(item => item.title === title)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})

export const { addTodo, deleteTodo, toggleStatus } = todoSlice.actions
export const todoReducer = todoSlice.reducer
