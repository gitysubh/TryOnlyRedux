//  action type constants
const typeAddTodo = 'ADD_TODO';
const typeRemoveTodo = 'REMOVE_TODO';
const typeCompeleteTodo = 'COMPLETE_TODO';


//reducer
function reducer(state = [], action) {
    if (action.type === typeAddTodo)
        return addTodo(state, action);
    else if (action.type === typeRemoveTodo)
        return removeTodo(state, action);
    else if (action.type === typeCompeleteTodo)
        return completeTodo(state, action);
}

//Actions
// Actually they are action creators
export function todoAdded(description) {
    return {
        type: typeAddTodo,
        payload: {
            description: "Learn Redux"
        }
    };
}

export function todoCompleted(id) {
    return {
        type: typeCompeleteTodo,
        payload: {
            id: 1
        }
    };
}

export function todoRemoved(id) {
    return {
        type: typeRemoveTodo,
        payload: {
            id: 1
        }
    };
}

export default reducer;

// Helper methods
// Must write Immutable code. You can use any library like immer or immutable.js
let id = 0;
function addTodo(state, action) {
    return [
        ...state,
        {
            id: ++id,
            description: action.payload.description,
            iscompleted: false
        }
    ];
}

function removeTodo(state, action) {
    const id = action.payload.id;
    return state.filter(todo => todo.id !== id);
}

function completeTodo(state, action) {
    const id = action.payload.id;
    return state.map(todo => todo.id !== id ? todo : { ...todo, iscompleted: true });
}