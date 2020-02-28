import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import { applyMiddleware } from "redux";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      )
    }
  };
}

export default connect(mapStateToProps,applyMiddleware(mapDispatchToProps))(ProductList);
