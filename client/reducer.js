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

import {NAVIGATION_CLICK} from "./constants/actionTypes";

const Reducer = (state = initialState, action) => {
    console.log("Event", action.type, action.payload);
    switch (action.type) {
        case NAVIGATION_CLICK:
            return { ...state, navigation: [...state.navigation, action.payload] };
        default:
            return state;
    }
};

export default Reducer;