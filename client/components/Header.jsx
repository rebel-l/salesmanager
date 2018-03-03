import React from 'react';
import Welcome from './Welcome.jsx';

const element = new Welcome();

class Header extends React.Component {
    render() {
        return (
            <header>
                <Welcome />
            </header>
        );
    }
}

export default Header