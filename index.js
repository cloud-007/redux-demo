const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAMS = 'BUY_ICE_CREAMS';

// region action creator

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCreams() {
    return {
        type: BUY_ICE_CREAMS,
    }
}

// endregion

// region Reducer

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAMS:
            return {
                ...state, // Copy of the state object
                numOfIceCreams: state.numOfIceCreams - 1
            }

        default:
            return state
    }
}

//endregion

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
); // Holds application state


console.log('Initial state', store.getState()); // Get initial state
const unsubscribe = store.subscribe(() => {
}); // Listen to state changes
store.dispatch(buyCake()); // Dispatch action
store.dispatch(buyCake()); // Dispatch action
store.dispatch(buyCake()); // Dispatch action

store.dispatch(buyIceCreams()); // Dispatch action
store.dispatch(buyIceCreams()); // Dispatch action

unsubscribe(); // Unsubscribe from state changes