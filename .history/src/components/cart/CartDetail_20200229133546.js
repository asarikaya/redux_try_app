import React, { Component } from 'react'
import {connect} from "redux"

class CartDetail extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cart:state.cartReducer
    }
}

export default connect(mapStateToProps)(CartDetail);