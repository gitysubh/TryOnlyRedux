import todoStore from './usingToolkit/storeUsingToolkit'
import store from './withoutToolkit/store';

//using redux-toolkit
import { todoAdded, todoCompleted, todoRemoved, todoAssignedToUser, getTodoByUser } from './usingToolkit/store/todoUsingSliceFunction'
import { addUser } from './usingToolkit/store/user';

//without using redux-toolkit
// import { todoAdded, todoRemoved, todoCompleted } from './withoutToolkit/todo'



// These are if you wish to use redux-toolkit approch
const combinedStore = todoStore();
// Subscribe to store to see the change of data in store
subscribeStore(combinedStore);

combinedStore.dispatch(addUser({ userName: 'User1' }));
combinedStore.dispatch(addUser({ userName: 'User2' }));


combinedStore.dispatch(todoAdded({ description: "Learn Redux" }));
combinedStore.dispatch(todoAdded({ description: "Learn React" }));

combinedStore.dispatch(todoAssignedToUser({ todoId: 1, userId: 1 }));

console.log(getTodoByUser(1)(combinedStore.getState()));

combinedStore.dispatch(todoCompleted({ id: 1 }));

combinedStore.dispatch(todoRemoved({ id: 1 }));

combinedStore.dispatch((dispatch,getState)=>{    
    dispatch({type:'bugAddedAsync'});
});


// //These are if you don't want to use redux-toolkit

// subscribeStore(store);
// store.dispatch(todoAdded("Learn Redux"));
// store.dispatch(todoCompleted(1));
// store.dispatch(todoRemoved(1));

//Need to use redux thunk in store to make it work

// store.dispatch(({dispatch,getState})=>{
//     dispatch({type:'bugAddedAsync'});
// })




//Helper Methods


function subscribeStore(store) {
    const subscription = store.subscribe(() => {
        console.log(store.getState());
    });
}