import axios from 'axios';

import './Tasks.css';
import Task from './Task';


const Tasks = (props) => {
    
    

    function updateStatus(uuid, status) {
        axios.put(`http://localhost:4000/task/update/${uuid}`,
            {
                status: status === 'done' ? 'pending' : 'done'
            }).then(() => props.getTasks())
    }

    function deleteTask(uuid) {
        axios.delete(`http://localhost:4000/task/delete/${uuid}`)
            .then( () => props.getTasks() )
    }
    return (
        <div className="tasks-wrapper">
            {props.tasks &&
                props.tasks.map((item, index) => <Task key={index} body={item.body} status={item.status} uuid={item._id.toString()} updateStatus={updateStatus} deleteTask={deleteTask} />)
            }
        </div>
    );
}

export default Tasks;