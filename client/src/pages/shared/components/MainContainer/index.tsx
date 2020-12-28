import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './style.module.css';
export function MainContainer(props: any) {
    return (
        <div className={styles.maincontainer}>
            <div className={styles.headercontainer}>
                <p>
                    {
                        <Switch>
                            <Route path="/home">Home</Route>
                            <Route path="/messages">Messages</Route>
                            <Route path="/notifications">Messages</Route>
                        </Switch>
                    }
                </p>
            </div>
            <div className={styles.roarcontainer}>{props.children}</div>
        </div>
    );
}
