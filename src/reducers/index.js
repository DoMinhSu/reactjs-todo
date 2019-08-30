import {combineReducers} from 'redux';
import tasks from './tasks';
const producers = combineReducers({
    tasks,

});
export default producers;