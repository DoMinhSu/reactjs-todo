import React from 'react';
import TaskSort from './TaskSort';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
class TaskList extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
            });
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
const mapDispatchToProps = (dispatch,prop)=>{
    return{
        
    }
}

export default connect(mapStateToProps,null)(TaskList);
