import React from "react";
import { useEffect } from "react";
import MyCard from './MyCard'
import axios from 'axios'
import CreateToDo from "./CreateToDo";
const ToDoList = () => {
    const [apiResponseData,setApiResponseData]=React.useState('');
    const fetchToDO=async ()=>{
        const response = await axios.get('https://my-projects-653c4-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json');
        setApiResponseData(response.data);
    }
    const addNewTask=async (newTaskData)=>{
        await axios.post('https://my-projects-653c4-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json',newTaskData);
        fetchToDO();
    }
    const deleteItem=async (itemId)=>{
        await axios.delete('https://my-projects-653c4-default-rtdb.asia-southeast1.firebasedatabase.app/todo/'+itemId+'.json')
        fetchToDO();
    }
    useEffect(()=>{
        fetchToDO()
    },[]);
    return (
        <div>
            <CreateToDo addNewTask={addNewTask}/>
            {
                apiResponseData && Object.keys(apiResponseData).map(key=>{
                    const {task,description,priority,date}=apiResponseData[key]
                    return <MyCard
                        id={key}
                        task={task}
                        description={description}
                        priority={priority}
                        date={date}
                        onDelete={deleteItem}
                    />
                })
            }
            
        </div>
    )
}
export default ToDoList;