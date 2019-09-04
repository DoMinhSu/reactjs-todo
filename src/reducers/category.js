import * as type from './../constants/index';
var initialState = [

];
var reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_LIST:
            state = action.payload;
            return state;
        case type.ADD:
            // state.data.push(action.payload);
            // return [...state.data];
        default: return state;
    }
}
export default reducer;