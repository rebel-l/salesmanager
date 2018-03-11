'use strict';

import React, {Component} from 'react';
import Button from './Button';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <nav>
                    <Button title="Start" action="start" />
                    <Button title="Stats" action="stats"/>
                    <Button title="Administration" action="admin"/>
                </nav>
            </header>
        );
    }
}

export default Header