import React, { Component } from "react";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"
import { bindActionCreators } from "redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";


class CartSummary extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.warning(product.productName+" sepetten silindi",2)
  }

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
        <DropdownToggle nav>
          Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={() => this.removeFromCart(cartItem.product)}
              >
                X
              </Badge>
              {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>Go To Cart</DropdownItem>
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

// state ye bağlanabilmek için
function mapStateToProps(state) {
  return {
    // proplara cart diye bişey oluştur değerinide cart reducer dan al
    cart: state.cartReducer
  };
}

// bir aksiyona (action) ulaşabilmek için
function mapDispatchToProps(dispatch) {
  return {
    // bu sayfadan actionlara ulaşmak için
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
