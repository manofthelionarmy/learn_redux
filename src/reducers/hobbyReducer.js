import {ADD_ITEM, READ_ITEMS, EDIT_ITEM, REMOVE_ITEM} from '../actions/types';
// import {combineReducers} from 'redux';
// Refer to: https://redux.js.org/recipes/structuring-reducers/refactoring-reducer-example
const initialState = {
    hobbies: []
};


// Break up each action into its own function
// Remember actions represent the facts about what happened
// Reducers update the state according to those actions

// use combine reducer at root level, like index.js
// use redux'x combineReducers() to combine each function we created
/*const reactHobbies = combineReducers({
    addItem,
    readItems,
    editItem,
    removeItem
});*/
const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            let new_id = 0;

            const hobbies = state.hobbies;

            if (!state.hobbies[0]) {
                new_id = 1;
            } else {
                new_id = state.hobbies[0].id + 1;
            }

            const hobby = {
                id: new_id,
                name: action.hobby.name,
                hobby: action.hobby.hobby
            }

            hobbies.unshift(hobby);

            // don't mutate the state. create a copy with Object.assign
            // Object.assign() is part of ES6 and need Babel to transpile ES6 syntax
            // to readable JS for older browsers
            return Object.assign({}, state, {
                hobbies: [...hobbies]
            });
        }
        case READ_ITEMS:
            return state; 
        case EDIT_ITEM: {
            const hobbies = state.hobbies;

            const hobby = action.hobby;

            hobbies.forEach((h) => {
                if (h.id === hobby.id) {
                    h.name = hobby.name;
                    h.hobby = hobby.hobby;
                }
            });

            return Object.assign({}, state, {
                hobbies: [...hobbies]
            });
        }
        case REMOVE_ITEM: {

            const id = action.id;

            let hobbies = state.hobbies;
            if (hobbies.length === 1) {

                hobbies.splice(0);

            } else {

                hobbies = hobbies.filter((h) => h.id !== id);
            }

            return Object.assign({}, state, {
                hobbies: [...hobbies]
            });
        }
        default:
            return state; 
    }
}

export default hobbyReducer; 