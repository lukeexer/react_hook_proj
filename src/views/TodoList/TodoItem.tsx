import React from 'react';
import { useHistory } from 'react-router-dom';
import { Todo } from '../../types/todoList';
import styles from './index.module.scss';

type TodoProps = {
    todo: Todo;
    switchTodoDoneStatus: (id: number) => void,
    deleteTodo: (id: number) => void,
}

const TodoItem = (props: TodoProps) => {
    const history = useHistory();

    return (
        <div className={styles.todoItem}>
            <span
                style={{
                    textDecoration: props.todo.done ? 'line-through' : 'none'
                }}
            >
                {props.todo.name}
            </span>
            <span>
                <input
                    type="checkbox"
                    checked={props.todo.done}
                    onChange={() => { props.switchTodoDoneStatus(props.todo.id); }}
                />
                <button
                    type="button"
                    onClick={() => { props.deleteTodo(props.todo.id); }}
                >
                    Delete
                </button>
                <button
                    type="button"
                    onClick={() => { history.push(`/todo/${props.todo.id}`); }}
                >
                    Details
                </button>
            </span>
        </div>
    )
};

export default TodoItem;