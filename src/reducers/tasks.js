import * as type from './../constants/index';
var initialState = [

];
var tasks = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_LIST : 
            state = action.products;
            return [...state];
        default: return [...state];
    }
}
export default tasks;