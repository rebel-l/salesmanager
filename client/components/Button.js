'use strict';

// Framework
import React, {Component} from 'react';
import { connect } from "react-redux";

// Actions
import navigate from "../actions/navigate";

const mapDispatchToProps = dispatch => {
    return {
        navigationClick: navigation => dispatch(navigate(navigation))
    };
};

class Button extends Component {
    constructor(props) {
        super(props);
        this.action = props.action;
        this.title = props.title;
        this.main = props.main;
        // if(this.parentClick) {
        //     this.parentClick = this.parentClick.bind(this);
        // }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // let nav = new Navigation();
        // nav.title = this.title;
        // nav.action = this.action;
        console.log('You clicked me now!', this.title, this.action);
        this.props.navigationClick({title: this.title, action: this.action})
        // this.main.title = this.title;
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.title}</button>
        );
    }
}

const NavButton = connect(null, mapDispatchToProps)(Button);

export default NavButton
