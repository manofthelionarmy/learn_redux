// THIS IS WHERE I DISPATCH ACTIONS TO THE REDUCER
import { ADD_ITEM, READ_ITEMS, EDIT_ITEM, REMOVE_ITEM} from './types';


/*export function readItems() {
    // this will pass a call back function called dispatch
    // and that call back function will dispatch data to the reducer
    // the data will have a payload and a type
    return function(dispatch) {
        dispatch({
            type: READ_ITEMS,
            payload: 'READING ITEMS'
        }); 
    }
}*/
// equivalent of the above using ES6
/*export const readItems = () => dispatch => {
    dispatch({
        type: READ_ITEMS,
        payload: 'READING ITEMS NOW'
    });
}*/
// Not sure how this file will help us ....
export const readItem = () => {
    return (
        { 
            type: READ_ITEMS, 
        }); 
}

export const addItem = (hobby) => {
    return (
        {
            type: ADD_ITEM,
            hobby: hobby
        }
    )
}

export const editItem = (editedHobby) => {
    return (
        {
            type: EDIT_ITEM,
            hobby: editedHobby
        }
    )
}

export const removeItem = (id) => {
    return (
        {
            type: REMOVE_ITEM,
            id: id
        }
    ); 
}