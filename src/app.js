import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';

import configureStore from './store/configureStore.js';
import { addExpense } from './actions/expenses.js';
import { setTextFilter, sortByDate, sortByAmount } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';

import 'normalize.css/normalize.css'; //npm add normalize.css@7.0.0
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({description: 'house', amount: 4500, createdAt: 10300}));
store.dispatch(addExpense({description: 'Car', amount: 6000, createdAt: 2000}));
store.dispatch(addExpense({description: 'coffee', amount: 500, createdAt: 3000}));

//store.dispatch(setTextFilter('bill'));

/*setTimeout(() => {
	store.dispatch(setTextFilter('car'));
}, 3000)*/


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//console.log(store.getState());

//<Provider> Define the store we want to provide for all of the compoenent
const jsx = (
<Provider store={store}>
<AppRouter />
</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));



