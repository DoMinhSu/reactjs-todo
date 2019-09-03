import * as type from './../constants/index';
export const GET_LIST = (products)=>{
    return {
        type:type.GET_LIST,
        products
    }
}
export const FETCH_GET_LIST = ()=>{
    return dispatch => {
        return fetch('https://jsonplaceholder.typicode.com/users/1/todos')
          .then(response => response.json())
          .then(json => dispatch(GET_LIST(json)))
      }
}