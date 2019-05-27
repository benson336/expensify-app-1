import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses.js';


const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
//const ExpenseListItem = ({description}) => (
<div>

<Link to={`/edit/${id}`}>
<h1>{description}</h1>
</Link>

<button onClick={()=> {
dispatch(removeExpense({id: id}));
}}
>Remove</button>
<p>{description}-{amount}</p>

</div>

);

export default connect()(ExpenseListItem);