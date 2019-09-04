import {combineReducers} from 'redux';
import categories from './category'; 
import languages from './languages'; 

const producers = combineReducers({
    categories,
    languages,
});
export default producers;