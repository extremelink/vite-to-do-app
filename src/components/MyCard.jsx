import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import Alert from '@mui/material/Alert';
import axios from 'axios'


const cardStyle = {
    height: 250,
    margin: 15,
    bgcolor: 'background.paper',
    borderLeft: '4px solid limegreen',
    borderRadius: 16,
    boxShadow: '3px 7px  rgba(0,0,0,0.5)',
    p: 2
}
export default function MyCard(props) {
    const deleteTask= async (itemId)=>{
        console.log(props);
        props.onDelete(props.id);
    }
    const { task, description, priority, date } = props;
    return (
        <Card fullWidth style={cardStyle}>
            <CardHeader fontSize="20"
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }}>
                        <AccessAlarmIcon />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="priority">
                        <Alert severity="warning" >
                            {priority}
                        </Alert>
                    </IconButton>
                }

                title={<Typography 
                        variant="h5" 
                        fontWeight={"bold"}
                        >{task}</Typography>}
                subheader={<Typography 
                            variant="h6"
                            alignItems={"center"}
                            >{date}</Typography>}
            />
            <CardContent>
                <Typography
                    variant="h5"
                    color="text."
                    height="194">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="Done">
                    <DoneIcon />
                </IconButton>
                <IconButton aria-label="Delete" onClick={deleteTask}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

