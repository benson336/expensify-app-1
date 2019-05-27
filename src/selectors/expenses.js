import moment from 'moment';

//Get Visible Expenses //NEW
const selectExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter((expense) => {
		const createdAtMoment = moment(expense.createdAt);
		const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
		//const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		//const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a,b)=>{
		if(sortBy === 'date'){
			return a.createdAt > b.createAt ? -1 : 1;
			//a>b return 1, [b, a]
			//a<b return -1, [a, b]
		} else if (sortBy === 'amount'){
			return a.amount > b.amount ? -1 : 1;

		}

	})
};

export default selectExpenses;