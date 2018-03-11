'use strict';

import { NAVIGATE } from "./../constants/actionTypes";

const defaultTitle = "Welcome to Sales Manager";

const initialState = [
        {
            title: defaultTitle,
            action: ""
        }
    ];

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATE:
            return [ ...state, action.payload ];
        default:
            return state;
    }
};


export default Reducer;
