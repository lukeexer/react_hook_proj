import React from 'react';
import styles from './index.module.scss';

type FilterProps = {
    filterDoneTodo: boolean;
    switchFilterDoneTodo: () => void;
}

const Filter = (props: FilterProps) => {
    return (
        <div className={styles.filter}>
            <input
                type="checkbox"
                checked={props.filterDoneTodo}
                onChange={props.switchFilterDoneTodo}
            />
            Hide all finished items.
        </div>
    )
};

export default Filter;