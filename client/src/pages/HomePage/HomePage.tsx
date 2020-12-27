import { NavBar } from '../shared';
import { MainContainer } from '../shared';
import React from 'react';

export function HomePage() {
    document.body.style.backgroundColor = 'black';
    return (
        <div>
            <NavBar />
            <MainContainer />
        </div>
    );
}
