import { Todo } from '../types/todoList';
import { TodoActionTypes } from '../actions/todo';

interface TodoState {
    todos: Todo[];
    displayTodos: Todo[];
    filterDoneTodo: boolean;
}

const initialState: TodoState = {
    todos: [],
    displayTodos: [],
    filterDoneTodo: false,
};

const filterDisplayTodos = (filterDoneTodo: boolean, todos: Todo[]) => {
    if (filterDoneTodo) {
        return todos.filter(todo => !todo.done)
    }
    return [...todos];
};

const todos = (state = initialState, action: TodoActionTypes): TodoState => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
                displayTodos: filterDisplayTodos(
                    state.filterDoneTodo, [...state.todos, action.payload]
                )
            };
        case 'DELETE_TODO': {
            const newTodos = state.todos.filter((todo: Todo) => (
                todo.id !== action.payload
            ));
            return {
                ...state,
                todos: [...newTodos],
                displayTodos: filterDisplayTodos(
                    state.filterDoneTodo, [...newTodos]
                )
            };
        }
        case 'SWITCH_TODO_DONE_STATUS': {
            const targetTodoIndex = state.todos.findIndex((todo: Todo) => (
                todo.id === action.payload
            ));

            const newTodos = [...state.todos];

            newTodos[targetTodoIndex] = {
                ...newTodos[targetTodoIndex],
                done: !newTodos[targetTodoIndex].done
            };

            return {
                ...state,
                todos: [...newTodos],
                displayTodos: filterDisplayTodos(
                 state.filterDoneTodo, [...newTodos]   
                ),
            };
        }
        case 'SWITCH_FILTER_DONE_TODO': {
            return {
                ...state,
                filterDoneTodo: !state.filterDoneTodo,
                displayTodos: filterDisplayTodos(
                    !state.filterDoneTodo, [...state.todos]
                ),
            };
        }
        default:
            return state;
    };
};

export default todos;