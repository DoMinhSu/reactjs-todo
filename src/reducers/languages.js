import * as type from './../constants/index';
var initialState ={
    default: 'en',
    languages :['en','ar']
} 
var reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}
export default reducer;