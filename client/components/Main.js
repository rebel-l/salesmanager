'use strict';

import React, {Component} from 'react';
import { connect } from "react-redux";
import Title from './Title';

const mapStateToProps = state => {
    return { navigation: state.navigation };
};

class ConnectedMain extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return (
            <main>
                <Title title={this.title}/>
                <ul>
                    {this.props.navigation.map(el => (
                        <li key={el.action}>
                            {el.title}
                        </li>
                    ))}
                </ul>
            </main>
        );
    }
}

const Main = connect(mapStateToProps)(ConnectedMain);

export default Main
