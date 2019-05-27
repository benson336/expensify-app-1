import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import selectExpenses from '../selectors/expenses.js';

//This component replace store.subscripbe, store.getState()
const ExpenseList = (props) => (
<div>
<h1>Expense List</h1>
{props.expenses.map((expense)=>{
return <ExpenseListItem key={expense.id} {...expense}  />;
//<ExpenseListItem key={expense.id} expense={expense.description} expenseId={expense.id}  />;
// Alternative way return <ExpenseListItem {...expense} />;
})}

</div>
);

//Get from Store, store.getState(), state = store.getState()
const mapStateToProps = (state) => {
	return {
		//expenses: state.expenses,
		//filters: state.filters
		expenses: selectExpenses(state.expenses, state.filters) // [{...}, {...}]
	};
};

export default connect(mapStateToProps)(ExpenseList);