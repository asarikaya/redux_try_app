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
        
        <Route component={NotFound}/>
      </Switch>
      <Dashboard/>
    </Container>
  );
}

export default App;
