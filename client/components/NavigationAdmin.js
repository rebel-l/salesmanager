'use strict';

//Framework
import React, {Component} from 'react';

// Components
import Button from './Button';

class NavigationAdmin extends Component {
    render() {
        return (
            <div>
                <Button title="Events" action="listEvents"/>
                <Button title="Products" action="listProducts"/>
            </div>
        )
    }
}

export default NavigationAdmin;
