import Header from './components/Header';
import CreateToDo from './components/CreateToDo';
// import Container from '@mui/material'
import Container from '@mui/material/Container';

const App = () => {
  return (
    <div>
      <Header />
      <Container sx={{paddingTop:'80px'}}>
        <CreateToDo />
      </Container>
    </div>
  )
}
export default App;