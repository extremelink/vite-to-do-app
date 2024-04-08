import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Autocomplete from '@mui/material/Autocomplete';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from"axios"
import Fab from '@mui/material/Fab'
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import ToDoList from './ToDoList';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const addToBtnStyle={
position:'fixed',
bottom:20,
left:'50%',
}

const priorityOptions=[
  {label:'High',value:"high"},
  {label:'Medium',value:"medium"},
  {label:'Low',value:"low"}
]

export default function CreateToDo(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [task,setTask] = React.useState('');
  const [description,setDescrption]=React.useState('');
  const [priority,setPriority]=React.useState('');
  const [date,setDate]=React.useState('');
  console.log(task,description,priority,date);

  const resetForm=()=>{
    setTask('');
    setDescrption('');
    setPriority('');
    setDate('');
  }
  const validateForm=()=>{
    if(task.length<3){
      alert('Minimum length of Task should be 3')
      return;
    }

    if(description.length<5){
      alert('Minimum length of description should be 5')
      return;
    }
    if(priority.length<2){
      alert('invalid priority')
      return;
    }
    if(date.length<2){
      alert('invalid date')
      return;
    }

  }

  const handleFormSubmit=async ()=>{
    // validation
    validateForm();
    const taskValues={
      'task':task,
      'description':description,
      'priority':priority,
      'date':date
    }
    // axios.post('https://my-projects-653c4-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json',taskValues)
    props.addNewTask(taskValues);
    // alert Success
    alert("form submitted successfully!!")
    // resetForm
    resetForm();
    // close modal
    handleClose();
  }

  return (
    <div>
      <Fab
       color='success'
       style={addToBtnStyle}
       onClick={handleOpen}
      >
        <AddCircleSharpIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            required
            fullWidth
            label='Task'
            variant='standard'
            sx={{ mb: 2 }}
            onChange={e=>setTask(e.target.value)}
            value={task}
          />
          <TextField
            id="filled-basic"
            required
            label="description"
            variant="filled"
            fullWidth
            sx={{mb:2}}
            onChange={e=>setDescrption(e.target.value)}
            value={description}
          />
          <Autocomplete
            id="disable-clearable"
            disableClearable
            options={priorityOptions}
            required
            fullWidth
            sx={{mb:2}}
            onChange={(e,value)=>setPriority(value.value)}
            renderInput={(params) => (
              <TextField {...params} label="Priority" variant="standard" />
            )}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
              label="Select Date" 
              sx={{mb:2,width:'100%'}} 
              onChange={value=>setDate(value.format('YYYY-MM-DD'))}/>
          </LocalizationProvider>
          <Button variant='contained' fullWidth onClick={handleFormSubmit}>
            Add To The List
          </Button>

        </Box>
      </Modal>
    </div>
  );
}