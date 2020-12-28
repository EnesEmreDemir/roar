import { NavBar } from '../shared';
import { MainContainer } from '../shared';
import { RoarBar } from './components';
import { SearchBar } from './components';
import React from 'react';
import Logo from '../../assets/tiger.svg';
import styles from './style.module.css';
import { Link } from 'react-router-dom';

export function HomePage() {
    document.body.style.backgroundColor = 'black';
    return (
        <div>
            <Link to="/home">
                <img src={Logo} alt="Logo" className={styles.logo} />
            </Link>
            <NavBar />
            <MainContainer>
                <RoarBar />
            </MainContainer>
            <SearchBar />
        </div>
    );
}
