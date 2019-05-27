import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//==============================================Action=================================================
///////////////////////////////ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
		type: 'ADD_EXPENSE',
		expense: {
			id:uuid(),
			description: description,
			note: note,
			amount: amount,
			createdAt: createdAt 
		}
});
//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => {
	return {
		type: 'REMOVE_EXPENSE',
		id: id
	}
}
//EDIT_EXPENSE
const editExpense = ({id, amount = 0} = {}) => {
	return{
		type: 'EDIT_EXPENSE',
		id: id,
		amount: amount
		/*expense: {
		id: id,
		amount: amount
	}*/
	}
}

//////////////////////////////SET_TEXT_FILTER
const setTextFilter = ( text = ' ') => {
	return {
		type:'SET_TEXT_FILTER',
		text: text
	}
}

const sortByDate = ( ) => {
	return {
		type:'SORT_BY_DATE'
	}
}

const sortByAmount = ( ) => {
	return {
		type:'SORT_BY_AMOUNT'
	}
}

const setStartDate = (num) => {
	return {
		type: 'SET_START_DATE',
		startDate: num
	}
}

const setEndDate = (num) => {
	return {
		type: 'SET_END_DATE',
		endDate: num
	}
}

//=========================================================Reducer===============================================================
///////Expenses Reducer
const expensesReducer = (state = [], action ) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
		//return state.push(action.expense); // Dont want to change array
		//return state.concat(action.expense);
		return [ ...state, action.expense ];

		case 'REMOVE_EXPENSE':
		return state.filter(({id})=>{                      //[ {id:34, text: dd, ..}, {...}, {...}]
			return id !== action.id
		});

		case 'EDIT_EXPENSE':
			return state.map((expense)=>{                  // [{...}, {...}, {...}]
				if(expense.id === action.id){
					return {
						...expense,
						amount: action.amount
						//...action.amount
					};
					} 
				else{
					return expense;
					};
			});

		default:
			return state;
	}
};

///////Filter Reducer
const filterReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = ( state = filterReducerDefaultState, action) => {
	switch (action.type){
		case 'SET_TEXT_FILTER':
		return { ...state, text: action.text }

		case 'SORT_BY_AMOUNT':
		return { ...state, sortBy: 'amount'}

		case 'SORT_BY_DATE':
		return { ...state, sortBy: 'date' }

		case 'SET_START_DATE':
		return { ...state, startDate: action.startDate }

		case 'SET_END_DATE':
		return { ...state, endDate: action.endDate }

		default: 
		   return state;
	}
};

//===========================================================================================================================================
//Get Visible Expenses //NEW
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a,b)=>{
		if(sortBy === 'date'){
			return a.createdAt > b.createAt ? -1 : 1;
			//a>b return 1, [b, a]
			//a<b return -1, [a, b]
		} else if (sortByAmount === 'amount'){
			return a.amount > b.amount ? -1 : 1;

		}

	})
};

///////Combine Reducers
const store = createStore(
combineReducers(
{ expenses: expensesReducer, filters: filtersReducer } // {expenses: [{...}, {...}], filters:{...}}
));

///////Subscribe
store.subscribe(() => {
	const state = store.getState();//NEW
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);//NEW
	console.log(visibleExpenses);//NEW
	//console.log(store.getState());
})

//////DISPATCH ACTION to Store
const addExpenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 2000}));
const addExpenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 200, createdAt: -1000}));
//console.log(addExpenseTwo); //addExpenseTwo is an arrow function returns an OBJECT, passed into store
//store.dispatch(removeExpense({id: addExpenseOne.expense.id}));
//store.dispatch(editExpense({id: addExpenseTwo.expense.id, amount: 500}));

//store.dispatch(setTextFilter('ffe'));
//store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
//store.dispatch(sortByDate(date));

//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

const demoStore = {
	expenses:[
	{
		id: 'pointe',
		description: 'January Rent',
		note: 'This was the final payment for that address',
		amount: 54500,
		createAt: 0
	}

	],
	filters:{
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
}

//1. addExpenseTwo is an arrow function returns an OBJECT, passed into store
/*2. const store = createStore(
combineReducers({
     expenses: expensesReducer,
     filters: filtersReducer
   })
);*/
//Created an {expenses: [{...}, {...}], filters:{...}}
//store{ reducer: [ ], reducer: { } }