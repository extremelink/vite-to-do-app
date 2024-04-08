import Header from './components/Header';
import CreateToDo from './components/CreateToDo';
import Container from '@mui/material/Container';
import ToDoList from './components/ToDoList';

const App = () => {
  return (
    <div>
      <Header />
      <Container sx={{paddingTop:'80px'}}>
        <CreateToDo />
        <ToDoList />
      </Container>
    </div>
  )
}
export default App;