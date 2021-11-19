import React from 'react';
import styles from './index.module.scss';

const Filter = () => {
    return (
        <div className={styles.filter}>
            <input type="checkbox" /> Hide all finished items.
        </div>
    )
};

export default Filter;