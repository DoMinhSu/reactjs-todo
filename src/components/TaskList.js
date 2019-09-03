import React from 'react';
import TaskSort from './TaskSort';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import * as type from './../constants/index';
class TaskList extends React.Component {
    componentDidMount(){
        this.props.fetchTaskList();
    }
    render() {
        const {tasks} = this.props;
        const taskLists = tasks.map((task,key)=>
            <TaskItem key={key} task={task}/>
        );
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <TaskSort/>
                    {taskLists}
                </tbody>
            </table>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        tasks : state.tasks
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return{
        fetchTaskList :() => {
            dispatch(type.FETCH_GET_LIST);   
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
