'use strict';

//Framework
import React, {Component} from 'react';
import { connect } from "react-redux";

// Components
import Title from './Title';
import NavigationAdmin from './NavigationAdmin';

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
        switch (last.action) {
            case "admin":
                return (
                  <main>
                      <Title title={last.title}/>
                      <NavigationAdmin/>
                  </main>
                );
            default:
                return (
                    <main>
                        <Title title={last.title}/>
                    </main>
                );
        }
    }
}

const Main = connect(mapStateToProps)(ConnectedMain);

export default Main
