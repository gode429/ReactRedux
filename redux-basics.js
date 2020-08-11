const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter : 0
}

//REDUCER
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter : state.counter + 1
            
        }
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter : state.counter + action.value
            
        }
    }
    return state;
}

//STORE 
const store = createStore(rootReducer);
console.log(store.getState());


//Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})

//Dispatching Actions
store.dispatch({type:'INC_COUNTER'});
console.log(store.getState());
store.dispatch({type:'ADD_COUNTER', value : 10});
console.log(store.getState());