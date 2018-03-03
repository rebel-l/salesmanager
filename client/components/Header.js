'use strict';

import React from 'react';
import Button from './Button';

function Header(props) {
    return (
        <header>
            <nav>
                <Button title="Start"/>
                <Button title="Stats"/>
                <Button title="Administration"/>
            </nav>
        </header>
    );
}

export default Header