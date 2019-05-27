
const todos = [{
	text:'Order cat food',
	completed: true 
},{
	text:'Clean kitchen',
	completed: false
},{
	text:'Buy food',
	completed: true
},{
	text:'Do work',
	completed: false
},{
	text:'Exercise',
	completed: true
}]

//3. Outout the one FALSE

==============================================Filter()===========================================
const result = function (todos){
	return todos.filter(function(note, index){
		return note.completed === true
	})
}
console.log(result(todos))

===========================================findIndex()=============================================
////1. Delete toDo
/*
const deleteTodo = function(notes, noteTitle){
	const index = notes.findIndex(function(note, index){
		return note.text.toLowerCase() === noteTitle.toLowerCase()
	})

	if(index > -1){
		notes.splice(index, 1)
	}

}
deleteTodo(todos, 'order cat food')
console.log(todos)*/

=============================================find()=============================================
////2. Return object
/*
const result = function(notes, noteTitle){
	return notes.find(function(note, index){
		return note.text.toLowerCase() === noteTitle.toLowerCase()
	})
}

console.log(result(todos, 'order cat food'))*/

===============================================.sort()========================================
//Sort completed: TRUE go on top of the list.
const newd = function(todos){
	todos.sort(function(a, b){
		if(a.completed === true && b.completed === false){
			return 1
		} else if ( a.completed === false && b.completed === true ){
			return -1
		} else {
			return 0
		}
	})
}
sortTodos(todos)
console.log(todos)

/* Concept
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}*/