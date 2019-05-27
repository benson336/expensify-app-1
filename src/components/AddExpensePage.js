import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => {
return (

<div>
<h1>Add ExpenseForm</h1>
<ExpenseForm onSubmit={(expense) =>{
props.dispatch(addExpense(expense));
props.history.push('/'); //Re-direct to specific page.
//console.log(expense);
}}/>
</div>

);

};

export default connect()(AddExpensePage);