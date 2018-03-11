'use strict';

import {NAVIGATE} from "../constants/actionTypes";

const navigate = navigation => ({
    type: NAVIGATE,
    payload: navigation
});

export default navigate;
