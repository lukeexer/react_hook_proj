import React from 'react';
import styles from './index.module.scss';
import Filter from './Filter';
import useTodoList from '../../hooks/useTodoList';
import TodoItem from './TodoItem';
import Form from './Form';

const TodoList = () => {
    const todoList = useTodoList();

    return (
        <div className={styles.layout}>
            <div className={styles.todoListWrapper}>
                <div className={styles.header}>
                    <span className={styles.title}>
                        TodoList
                    </span>
                    <span className={styles.subTitle}>
                        Here is a sample todo list.
                    </span>
                </div>
                <Filter 
                    filterDoneTodo={todoList.filterDoneTodo}
                    switchFilterDoneTodo={todoList.switchFilterDoneTodo}
                />
                <div className={styles.todoList}>
                    {
                        todoList.todos.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                switchTodoDoneStatus={todoList.switchTodoDoneStatus}
                                deleteTodo={todoList.deleteTodo}
                            />
                        ))
                    }
                </div>
                <Form addTodo={todoList.addTodo}/>
            </div>
        </div>
    );
};

export default TodoList;