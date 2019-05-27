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

export default expensesReducer;