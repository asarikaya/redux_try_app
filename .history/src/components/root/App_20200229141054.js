import React from 'react';
import { Container } from 'reactstrap';
import Navi from "../navi/Navi"
import Dashboard from './Dashboard';
import {Switch,Route} from "react-router-dom"

function App() {
  return (
    <Container>
      <Navi/>
      <Switch>
        <Route exact path="/" component={Dashboard}>

        </Route>
      </Switch>
      <Dashboard/>
    </Container>
  );
}

export default App;
