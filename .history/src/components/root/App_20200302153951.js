import React from 'react';
import { Container } from 'reactstrap';
import Navi from "../navi/Navi"
import Dashboard from './Dashboard';
import {Switch,Route} from "react-router-dom"
import NotFound from '../common/NotFound';
import CartDetail from '../cart/CartDetail';

function App() {
  return (
    <Container>
      <Navi/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/products" component={Dashboard}/>
        <Route exact path="/cart" component={CartDetail}/>
        <Route path="/saveproduct/:productId" component={CartDetail}/>
        <Route component={NotFound}/>
      </Switch>
    </Container>
  );
}

export default App;
