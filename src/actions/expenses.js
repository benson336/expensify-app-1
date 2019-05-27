import uuid from 'uuid';

//////////////////////ADD_EXPENSE ACTIONS
export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
	return{
		type: 'ADD_EXPENSE',
		expense: {
			id:uuid(),
			description: description,
			note: note,
			amount: amount,
			createdAt: createdAt
		   }
		}
}

//REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => {
	return {
		type: 'REMOVE_EXPENSE',
		id: id
	}
} 

//EDIT_EXPENSE
export const editExpense = ({id, amount = 0} = {}) => {
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

