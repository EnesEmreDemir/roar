import React from 'react';
import styles from './style.module.css';
export function SearchBar() {
    return (
        <input
            type="text"
            placeholder="Search Roar."
            className={styles.searchinput}
        />
    );
}
