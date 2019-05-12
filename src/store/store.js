// The point of this is to show how the store works
// The stoere has the following responsibilities:
// 1. Hold application state
// 2. Allow access to state via getState()
// 3. Allows state to be updated via dispatch(action)
// 4. Registers listeners via subscribe(listener)
// 5. Handles unregistering of listerners via the funciton returned by subsribe(lsitener)

// Refer to the documentation: https://redux.js.org/basics/store
import { createStore } from 'redux';
import reactHobbies from '../reducers'; 

// import {addItem, readItem, editItem, removeItem} from '../actions/hobbyActions';

const store = createStore(
    reactHobbies,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store; 

/*console.log(store.getState()); 

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// A side note: 
// As we dispatch an action: 
// The payload will be sent to each action type (it calls every reducer!!). It will only carry out an action if the type 
// matches the cases in the switch statements in each function found in hobbyReducers.js
// This occurs because we combined the reducers. We combine the reducers so we can ensure that we have one root reducer
// Maybe there's a better way to write the reducers... 
store.dispatch(readItem());

store.dispatch(addItem(
    {
        name: 'Isaiah',
        hobby: 'basketball'
    }
));

store.dispatch(readItem());

store.dispatch(editItem({
    id: 1,
    name: 'Armando',
    hobby: 'guitar'
}));

store.dispatch(removeItem(2));

unsubscribe();*/