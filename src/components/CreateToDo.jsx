import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Autocomplete from '@mui/material/Autocomplete';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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

const priorityOptions=[
  {label:'High',value:"high"},
  {label:'Medium',value:"medium"},
  {label:'Low',value:"low"}
]

export default function CreateToDo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [task,setTask] = React.useState('');
  const [description,setDescrption]=React.useState('');
  const [priority,setPriority]=React.useState('');
  const [date,setDate]=React.useState('');
  console.log(task,description,priority,date);

  return (
    <div>
      <Button onClick={handleOpen} variant='outlined'>Open modal</Button>
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
            <DatePicker label="Select Date" sx={{mb:2,width:'100%'}} defaultValue={dayjs('2022-04-17')} />
          </LocalizationProvider>
          <Button variant='contained' fullWidth>
            Add To The List
          </Button>

        </Box>
      </Modal>
    </div>
  );
}