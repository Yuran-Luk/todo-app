import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const filters = {
  todo: 'Actile',
  done: 'Completed',
  all: 'All',
}

export interface TodoItem {
  id: number,
  name: string,
  isDone: boolean
}

export type FilterT =  keyof typeof filters

export interface TodoState {
  items: TodoItem[],
  filter: FilterT
}

const initialState: TodoState = {
  items: [],
  filter: 'all'
}

export const counterSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newId = new Date().getTime()
      const newTodo: TodoItem = {
        id: newId,
        name: action.payload,
        isDone: false
      }
      state.items.push(newTodo)
    },
    deleteTodo: (state, action: PayloadAction<TodoItem>) => {
      const { id } = action.payload
      state.items = state.items.filter((todo) => todo.id !== id)
    },
    toggleIsDone: (state, action: PayloadAction<number>) => {
      state.items = state.items.map((todo) => todo.id === action.payload 
        ? { ...todo, isDone: !todo.isDone }
        : todo)
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((item) => !item.isDone)
    },
    setFilter: (state, action: PayloadAction<FilterT>) => {
      state.filter = action.payload
    },
  },
})

export const { addTodo, deleteTodo, toggleIsDone, clearCompleted, setFilter } = counterSlice.actions

export default counterSlice.reducer
