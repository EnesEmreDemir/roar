import React from 'react';
import styles from './style.module.css';
export function RoarBar() {
    return (
        <input
            type="text"
            placeholder="What's happening?"
            className={styles.roarinput}
        />
    );
}
