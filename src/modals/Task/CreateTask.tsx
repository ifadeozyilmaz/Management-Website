import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import "../../container/Task/style.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:440,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius:4,
  boxShadow: 24,
  p: 4,
};

export interface Tasks {
  Name:string;
  description:string; 
}
export interface TaskProps{
    open:boolean;
    onClose: () => void;
    save: (taskObj:Tasks) => void;
}
export default function CreateTask({open, onClose,save}:TaskProps) {

  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e:any) => {
    const {name,value} = e.target

    if(name === "taskName"){
      setTaskName(value)
    }else{
      setDescription(value)
    }
  }
  const handleSave = () => {
    const taskObj: Tasks = {
      Name: taskName,
      description: description,
    }
    save(taskObj);
    onClose();
  }

  return (
    <div>
      <Modal
        open={open}>
        <Box sx={style}>
          <form>
          <h3>CREATE TASK</h3>
          <label>Task Name</label>
            <div>
              <input type='text' className='taskName' value={taskName} 
              onChange={handleChange} name='taskName'/>
            </div>
            <label>Description</label>
            <div>
              <textarea rows={5} className='taskDesc' value={description} 
              onChange={handleChange} name='description'/>
            </div>
          </form>
          <button className='modal-btn' onClick={handleSave}>Create</button>
          <button className='modal-btn' onClick={onClose}>Cancel</button>
        </Box>
      </Modal>
    </div>
  );
}
