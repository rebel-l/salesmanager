'use strict';

//Framework
import React, {Component} from 'react';
import { connect } from "react-redux";

// Components
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
        let last = this.props.navigation[this.props.navigation.length - 1];
        return (
            <main>
                <Title title={last.title}/>
                <p>Action: {last.action}</p>
            </main>
        );
    }
}

const Main = connect(mapStateToProps)(ConnectedMain);

export default Main
