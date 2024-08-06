import React from "react";
import {Tasks} from "../../modals/Task/CreateTask";
import "../TaskCard/style.css";
import DeleteIcon from '@mui/icons-material/Delete';

export interface TaskCardProps{
    taskObj:Tasks;
    index: number;
    deleteTask: (index:number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ taskObj, index, deleteTask}) => {

    const handleDelete = () => {
        deleteTask(index)
    }

    return(
        <div className="card-wrapper">
            <div className="card-top"></div>
            <div className="task-holder">
                <span className="card-header">{taskObj.Name}</span>
                <p>{taskObj.description}</p>
            </div>
            <div className="icons">
                    <i onClick={handleDelete}><DeleteIcon/></i>
                </div>
        </div>
    )
}

export default TaskCard;