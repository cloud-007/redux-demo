const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';

// region action creator

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// endregion

// region Reducer

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state, // Copy of the state object
                numOfCakes: state.numOfCakes - 1
            }

        default:
            return state
    }
}

//endregion

const store = createStore(reducer); // Holds application state
console.log('Initial state', store.getState()); // Get initial state
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState())); // Listen to state changes
store.dispatch(buyCake()); // Dispatch action
store.dispatch(buyCake()); // Dispatch action
store.dispatch(buyCake()); // Dispatch action

unsubscribe(); // Unsubscribe from state changes