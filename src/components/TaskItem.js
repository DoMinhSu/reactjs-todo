import React from 'react';

class TaskItem extends React.Component {
    render() {
        const { task } = this.props;
        return (
            <tr>
                <td>
                    {task.title}
                </td>
                <td>
                    {(task.completed === true) ? "Hoàn thành" : "Chưa xong"}
                </td>
                <td >
                    <button className="btn btn-danger">Sửa</button>&nbsp;
                    <button className="btn btn-warning">Xoá</button>&nbsp;
                </td>
            </tr>

        );
    }
}

export default TaskItem;
