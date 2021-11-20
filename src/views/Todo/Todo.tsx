import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { rootState } from '../../store';
import { Todo as ITodo } from '../../types/todoList';
import { getTodoById } from '../../actions/todo';
import styles from './index.module.scss';

const Todo = () => {
    const history = useHistory();

    const { id }: { id: string } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodoById(Number(id)));
    });

    const todo: ITodo = useSelector(
        (state: rootState) => state.todo
    );

    // const todos: ITodo[] = useSelector(
    //     (state: rootState) => state.todos
    // );

    // const todo: ITodo = todos.find(
    //     (todo: ITodo) => todo.id === Number(id)
    // ) as ITodo;

    return (
        <div className={styles.layout}>
            <div className={styles.todo}>
                <span>ID: { todo.id }</span>
                <h1>{ todo.name }</h1>
                <p>
                    Completion Progress:
                    <span style={{ color: todo.done ? '#21bf73' : '#eb8f8f' }}>
                        {todo.done ? 'Finished' : 'Not Finished'}
                    </span>
                    <button type="button" onClick={() => { history.push('/') }}>
                        Back to Todo List
                    </button>
                </p>
            </div>
        </div>
    )
};

export default Todo;