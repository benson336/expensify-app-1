import { createStore } from 'redux';

// Action generator - function that return action's OBJECT
// Set PAYLOAD to a default object, so it is not UNDEFINED.
const incrementCount = (payload = {}) => {
	return {
		type: 'INCREMENT',
		//Check if it is number

		incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
	};
};

const decrementCount = (payload = {}) => {
	return {
		type: 'DECREMENT',
		decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
	};
};

const setValue = (payload = {}) => {
	return {
		type: 'SET',
		set: typeof payload.set === 'number' ? payload.set : 1
	};
};

const resetValue = (payload ={}) => {
	return {
		type: 'RESET',
		reset: typeof payload.reset === 'number' ? payload.reset : 1
	}

}

// 1. Reducers are pure function (dont use variable outside of function)
// 2. Never change state or action
const store = createStore((state = { count: 0}, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			}
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			}
		case 'SET':
			return {
				count: action.set
			}
		case 'RESET':
			return {
				count: action.reset
			}

		default:
			return state
}})

// get the current state, nidify whenever state changes
const unsubscribe = store.subscribe (() => {
	console.log(store.getState()); 
})



//Action - Object that gets sent to the store
//dispatch will receive OBJECT
/*store.dispatch({
type: 'INCREMENT',
incrementBy: 5
});
*/
store.dispatch(incrementCount({incrementBy: 99}))

/*
store.dispatch({
type: 'DECREMENT',
decrementBy: 5
});*/
store.dispatch(decrementCount({decrementBy: 98}))


//unsubscribe() 

store.dispatch(setValue({set: 101}))
/*
store.dispatch({
type: 'SET',
ccount: 101
});*/

store.dispatch(resetValue({reset: 0}))



