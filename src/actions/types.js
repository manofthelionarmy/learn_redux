export const ADD_ITEM = 'ADD_ITEM';
export const READ_ITEMS = 'READ_ITEMS'; 
export const REMOVE_ITEM = 'REMOVE_ITEM'; 
export const EDIT_ITEM = 'EDIT_ITEM';

// TODO: My other actions may include SHOW_EDIT_FORM, IS_LIST_EMPTY
// But also remember: THE REDUX STORE WILL CONTAIN STATE THAT I WANT 
// MY COMPONENTS TO HAVE ACCESS TO. I think it's okay for individual 
// components to manage their own state, such as isListEmpty in HobbiesList.js
// The one thing that I want to share across each compnent is the hobbies array