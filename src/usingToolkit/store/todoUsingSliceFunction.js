// In this example the reducer and actions are created using createSlice method from redux-toolkit
// If You don't like this approch you can follow other approches.


import { createSlice, createSelector } from '@reduxjs/toolkit'

let id = 0;

// Creates reducers, actions even action types at the same time.
const slice = createSlice({
    initialState: [],
    name: 'bugs',
    reducers: {
        todoAdded: addTodo,
        todoRemoved: removeTodo,
        todoCompleted: completeTodo,
        todoAssignedToUser: asignTodoToUser
    }
});

//Check the object structure once in the console before proceed to next line
//console.log(slice);

export default slice.reducer;
export const { todoAdded, todoRemoved, todoCompleted, todoAssignedToUser } = slice.actions;

//Selectors
//The Selectors are created using memoization technique by reselector npm package

export const getTodoByUser = (userId) => createSelector(
    state => state.entities.todo,
    todo => todo.filter(todo => todo.userId === userId)
);

// redux toolkit handles the immutibility using immer internally. So you can write mutable code if you wish to
function addTodo(todos, action) {
    todos.push(
        {
            id: ++id,
            description: action.payload.description,
            iscompleted: false
        }
    );
}

function removeTodo(todos, action) {
    const id = action.payload.id;
    return todos.filter(todo => todo.id !== id);
}

function completeTodo(state, action) {
    const id = action.payload.id;
    return state.map(todo => todo.id !== id ? todo : { ...todo, iscompleted: true });
}

function asignTodoToUser(todo, action) {
    const { todoId, userId } = action.payload;
    const index = todo.findIndex(item => item.id == todoId);
    todo[index].userId = userId;
}
