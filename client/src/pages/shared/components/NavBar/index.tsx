import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export function NavBar() {
    return (
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/notifications">Notifications</Link>
            </li>
            <li>
                <Link to="/messages">Messages</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    );
}
