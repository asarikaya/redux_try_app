import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Categories</h3>
        <h5>Seçili Category : {this.props.currentCategory}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategroyReducer
  }
}
export default connect(mapStateToProps)(CategoryList);
