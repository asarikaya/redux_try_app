import React, { Component } from "react";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions"

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";
import { bindActionCreators } from "redux";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Cart is empty</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => (
            <DropdownItem>
              <Badge color="danger" onClick={()=>this.actions.removeFromCart(cartItem.product)}>X</Badge>
              {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {// eğer cart içinde ürün varsa renderSummary yi yoksa renderEmpty yi göster
        this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // proplara cart diye bişey oluştur değerinide cart reducer dan al
    cart: state.cartReducer
  };
}

function mapDispatchToProps(dispatch){
    return{
        // bu sayfadan actionlara ulaşmak için 
        actions:{
            removeFromCart:bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
