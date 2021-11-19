import React from 'react';
import styles from './index.module.scss';
import Filter from './Filter';

const TodoList = () => {
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
                <Filter />
            </div>
        </div>
    );
};

export default TodoList;