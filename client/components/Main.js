'use strict';

import React from 'react';
import Title from './Title';

function Main(props) {
    const title = "Welcome to Sales Manager";
    return (
        <main>
            <Title title={title}/>
        </main>
    );
}

export default Main