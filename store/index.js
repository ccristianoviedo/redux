import {createStore, combineReducers} from 'redux'

import CategoryReducer from './reducers/category.reducer';
import BreadReducer from './reducers/breads.reducer';

const rootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer
})
export default createStore(rootReducer);