import React from 'react';
import { Container } from 'reactstrap';
import Navi from "../navi/Navi"
import Dashboard from './Dashboard';
import {Switch,Route} from "react-router-dom"
import NotFound from '../common/NotFound';
import CartDetail from '../cart/CartDetail';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';

function App() {
  return (
    <Container>
      <Navi/>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/products" exact component={Dashboard}/>
        <Route path="/cart" exact component={CartDetail}/>
        <Route path="/saveproduct" exact component={AddOrUpdateProduct}/>
        <Route component={NotFound}/>
      </Switch>
    </Container>
  );
}

export default App;
