'use strict';

const defaultTitle = "Welcome to Sales Manager";

const initialState = {
    navigation: [
        {
            title: defaultTitle,
            action: ""
        }
    ]
};

import {NAVIGATE} from "./constants/actionTypes";

const Reducer = (state = initialState, action) => {
    console.log("Event", action.type, action.payload);
    switch (action.type) {
        case NAVIGATE:
            return { ...state, navigation: [...state.navigation, action.payload] };
        default:
            return state;
    }
};

export default Reducer;