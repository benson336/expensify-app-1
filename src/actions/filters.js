//////////////////////////////SET_TEXT_FILTER ACTIONS
export const setTextFilter = ( text = ' ') => {
	return {
		type:'SET_TEXT_FILTER',
		text: text
	}
}

export const sortByDate = ( ) => {
	return {
		type:'SORT_BY_DATE'
	}
}

export const sortByAmount = ( ) => {
	return {
		type:'SORT_BY_AMOUNT'
	}

}

export const setStartDate = (num) => {
	return {
		type: 'SET_START_DATE',
		startDate: num
	}
}

export const setEndDate = (num) => {
	return {
		type: 'SET_END_DATE',
		endDate: num
	}
}