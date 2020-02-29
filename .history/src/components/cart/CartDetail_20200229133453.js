import React, { Component } from 'react'

class CartDetail extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    cart:state.cartReducer
}

export default connect(mapStateToProps)(CartDetail);