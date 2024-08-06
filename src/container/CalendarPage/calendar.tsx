import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import React, { useState , useEffect} from 'react';
import { Button, Modal, TextField, Box } from '@mui/material';
import "../CalendarPage/style.css";

interface TodoItem {
  time: string;
  title: string;
}

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [todos, setTodos] = useState<{ [key: string]: TodoItem[] }>({});
  const [showModal, setShowModal] = useState<boolean>(false);
  const [todoDetails, setTodoDetails] = useState<TodoItem>({ time: '', title: '' });

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleAddTodo = () => {
    if (selectedDate) {
      const dateString = selectedDate.toDateString();
      setTodos(prevTodos => {
        const updatedTodos = {
          ...prevTodos,
          [dateString]: [...(prevTodos[dateString] || []), todoDetails]
        };
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        return updatedTodos;
      });
      setShowModal(false);
      setTodoDetails({ time: '', title: '' });
    }
  };
  function renderCell(date: Date) {
    const dateString = date.toDateString();
    const list = todos[dateString] || [];
    const displayList = list.length ? list.slice(0, 2) : [];

    const handleDeleteTodo = (event: React.MouseEvent<HTMLButtonElement>, indexToRemove: number) => {
      event.stopPropagation();
    
      setTodos(prevTodos => {
        const updatedList = [...prevTodos[dateString]];
        updatedList.splice(indexToRemove, 1); 
        const updatedTodos = {
          ...prevTodos,
          [dateString]: updatedList
        };
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        return updatedTodos;
      });
    };

    if (list.length) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="hover"
            speaker={
              <Popover>
                {list.map((item, index) => (
                  <div key={index}>
                    <p>
                      <b>{item.time}</b> - {item.title}
                    </p>
                  </div>
                ))}
              </Popover>
            }
          >
            <i>{moreCount} more</i>
          </Whisper>
        </li>
      );

      return (
        <ul className="calendar-todo-list">
          {displayList.map((item, index) => (
            <li key={index}>
              <button className='event-btn' onClick={(e) => handleDeleteTodo(e, index)}>x</button>
              <Badge /> <b>{item.time}</b> - {item.title}
            </li>
          ))}
          {moreCount ? moreItem : null}
        </ul>
      );
    }

    return null;
  }

  return (
    <div>
      <div className='calendar-header'>Calendar</div>
      <Calendar bordered renderCell={renderCell} onSelect={handleDateClick} />
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="add-todo-modal-title"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius:5,
        }}>
          <h2 id="add-todo-modal-title">Add Todo</h2>
          <label>Time</label>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            type='time'
            value={todoDetails.time}
            onChange={e => setTodoDetails({ ...todoDetails, time: e.target.value })}
          />
          <label>Title</label>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            value={todoDetails.title}
            onChange={e => setTodoDetails({ ...todoDetails, title: e.target.value })}
          />
          <Button variant="contained" onClick={handleAddTodo}>
            Add
          </Button>
          <Button variant="contained" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CalendarPage;