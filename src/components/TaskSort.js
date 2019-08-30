import React from 'react';

class TaskSort extends React.Component {
    render() {
        return (

            <tr>
                <td />
                <td>
                    <input type="text" className="form-control" />
                </td>
                <td>
                    <select className="form-control">
                        <option value={-1}>Tất Cả</option>
                        <option value={0}>Ẩn</option>
                        <option value={1}>Kích Hoạt</option>
                    </select>
                </td>
                <td />
            </tr>

        );
    }
}

export default TaskSort;
