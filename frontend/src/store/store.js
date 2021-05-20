import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';


import { userReducer } from './reducers/userReducer.js'
import { boardReducer } from './reducers/boardReducer.js'

const rootReducer = combineReducers({
    boardModule: boardReducer,
    userModule: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk)) //Passing the reducer

// For Debug
window.theStore = store;
store.subscribe(() => {
    console.log('Global State is:', store.getState())
})