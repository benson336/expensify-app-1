import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

///////Combine Reducers
export default () => {
const store = createStore(
combineReducers(
{ expenses: expensesReducer, filters: filtersReducer } // {expenses: [{...}, {...}], filters:{...}}
));

return store;
};