'use strict';

import { combineReducers } from 'redux';
import Navigation from './reducers/navigation';

const Reducer = combineReducers({
    navigation: Navigation
});

export default Reducer;