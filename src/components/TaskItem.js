import React from 'react';

class TaskItem extends React.Component {
    render() {
        const {task,key} = this.props;
        return (
            <tr>
                <td >
                
                </td>
                <td>
                {task.title}
                </td>
                <td>
                {(task.completed===true)? "Hoàn thành":"Chưa xong"}
                </td>
                <td />
            </tr>

        );
    }
}

export default TaskItem;
