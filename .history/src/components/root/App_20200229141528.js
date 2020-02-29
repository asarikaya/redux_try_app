import React from 'react';
import { Container } from 'reactstrap';
import Navi from "../navi/Navi"
import Dashboard from './Dashboard';
import {Switch,Route} from "react-router-dom"
import NotFound from '../common/NotFound';

function App() {
  return (
    <Container>
      <Navi/>
      <Switch>
        <Route exact path="/" component={Dashboard}>

        </Route>
        <Route component={NotFound}/>
      </Switch>
    </Container>
  );
}

export default App;
