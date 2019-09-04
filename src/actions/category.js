import * as type from './../constants/index';
export const GET_LIST = (payload) => {
    // console.log("GET_LIST");
    return {
        type: type.GET_LIST,
        payload
    }
}
export const GET_LIST_REQUEST = () => {
    // console.log("GET_LIST_REQUEST");
    return (dispatch) => {
        return fetch('http://saqerapp:7888/category?include=description,parent')
        .then(response => response.json())
        .then( json => dispatch( GET_LIST(json) ) )       
    }
}
export const ADD = (payload) => {
    console.log("add");
    return {
        type: type.ADD,
        payload
    }
}
export const ADD_REQUEST = (payload) => {
    console.log("add_request");
    return (dispatch) => {
        return fetch('http://saqerapp:7888/category/add', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => {
              console.log(response);
            return response.json()
          })
          .then(json => {
            //   console.log(json);
            dispatch(ADD(json))
          })
    }
}