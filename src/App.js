import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Algorithms from './Components/Algorithms/Algorithms'
import DataStructures from './Components/DataStructures/DataStructures'
import PythonHomework from './Components/Homework/PythonHomework'
import PythonNotes from './Components/Notes/PythonNotes'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'

function App() {
  
  return (
    <Router>
      <Container>
        <Header/>
        <Switch>
          <Route path="/Algorithms">
            <Algorithms/>
          </Route>
          <Route path="/DataStructures">
            <DataStructures/>
          </Route>
          <Route path="/PythonHomework">
            <PythonHomework/>
          </Route>
          <Route path="/PythonNotes">
            <PythonNotes/>
          </Route>
          <Route path="/Projects">
            <Projects/>
          </Route>
          <Route path="/Resume">
            <Resume/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
`