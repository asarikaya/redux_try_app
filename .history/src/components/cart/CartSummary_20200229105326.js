import React, { Component } from "react";
import { connect } from "react-redux";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink
} from "reactstrap";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Cart is empty</NavLink>
      </NavItem>
    );
  }

  renderSummary(){
    return(
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Cart
          </DropdownToggle>
          <DropdownMenu right>
              {this.props.cart.map(cartItem=>(
                <DropdownItem>{cartItem.productName}</DropdownItem>
              ))}
            
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
    )
  }

  render() {
    return (
      <div>
          {
              // eğer cart içinde ürün varsa renderSummary yi yoksa renderEmpty yi göster
            this.props.cart.length>0?this.renderSummary():this.renderEmpty()
          }
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
export default connect(mapStateToProps)(CartSummary);
