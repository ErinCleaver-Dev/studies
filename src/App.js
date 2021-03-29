import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Algorithms from './Components/Algorithms/Algorithms'
import DataStructures from './Components/DataStructures/DataStructures'
import HomeWork from './Components/Homework/Homework'
import Notes from './Components/Notes/Notes'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'

function App() {
  
  return (
    <Router>
      <Container>
        <Header/>
        <Switch>
        <Route>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/Algorithms">
            <Algorithms/>
          </Route>
          <Route path="/DataStructures">
            <DataStructures/>
          </Route>
          <Route path="/HomeWork">
            <HomeWork/>
          </Route>
          <Route path="/Notes">
            <Notes/>
          </Route>
          <Route path="/Projects">
            <Projects/>
          </Route>
          <Route path="/Resume">
            <Resume/>
          </Route>
        </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
`