import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartAction from "../../redux/actions/cartActions"
import alertify from "alertifyjs"

class CartDetail extends Component {
    romoveFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.warning(product.productName+" sepetten silindi")
    }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Quantity</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>*</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td><Button color="danger" onClick={()=>this.romoveFromCart(cartItem.product)}>REMOVE</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  };
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart:bindActionCreators(cartAction.removeFromCart,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartDetail);
