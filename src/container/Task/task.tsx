import React, { useEffect, useState } from "react";
import "../Task/style.css";
import CreateTask ,{Tasks} from "../../modals/Task/CreateTask";
import TaskCard from "../../components/TaskCard/taskcard";


export default function Task(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [taskList, setTaskList] = useState<Tasks[]>([]);

    useEffect(() => {
        const arr = localStorage.getItem("taskList")
        if (arr !== null) {
            const obj = JSON.parse(arr);
            if (obj) {
                setTaskList(obj)
            }
        }
    }, [])
  
    const deleteTask = (index:number) => {
        const tempList =taskList
        tempList.splice(index,1)
        setTaskList(tempList)
        localStorage.setItem("taskList", JSON.stringify(tempList));
        window.location.reload()
    }
    

    const saveTask = (taskObj:Tasks) => {
        const tempList =[...taskList,taskObj]
        setTaskList(tempList)
        localStorage.setItem("taskList", JSON.stringify(tempList));
    }

    return(
        <React.Fragment>
        <div className="header">
            All Tasks
            <div className="buton">
            <button className="create-btn" onClick={handleOpen}>Create Task</button>
            </div>
        </div>
        <div className="container">
            {taskList && taskList.map((obj,index)=><TaskCard taskObj = {obj}
             index = {index} deleteTask = {()=>deleteTask(index)}/>)}
        </div>
        <CreateTask open={open} onClose={handleClose} save={saveTask} />
        </React.Fragment>
    )
}