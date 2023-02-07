import { clickReducer } from './clickReducer';
//import { outroReducer } from './outroReducer';
//import { maisUmReducer } from './maisUmReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({

    clickState: clickReducer
    //outroReducer: outroReducer,
   // maisState: maisUmReducer
});

