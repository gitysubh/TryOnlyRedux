// In this example the reducers and actions are created using createReducers and createActions methods from reduc-toolkit
// You can follow the other approch if you doesnot like this one

import { createAction, createReducer } from '@reduxjs/toolkit'

//Action creators
const todoAdded = createAction("todoAdded")

const todoRemoved = createAction("todoRemoved");

const todoCompleted = createAction("todoCompleted");

export { todoAdded, todoRemoved, todoCompleted };

//Reducer
let id = 0; // This just used for id

// No need to use the action type constants as the type property of the actions feels that need
export default createReducer([], {
    [todoAdded.type]: (todos, action) => addTodo(todos, action.payload.description),
    [todoRemoved.type]: (todos, action) => removeTodo(todos, action.payload.id),
    [todoCompleted.type]: (todos, action) => completeTodo(todos, action.payload.id)
})

function addTodo(todos, description) {
    console.log(todos);
    todos.push(
        {
            id: ++id,
            description,
            iscompleted: false
        }
    );
}

function removeTodo(todos, id) {
    return todos.filter(todo => todo.id !== id);
}

function completeTodo(state, id) {
    return state.map(todo => todo.id !== id ? todo : { ...todo, iscompleted: true });
}
