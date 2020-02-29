import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import CategoryList from "../categories/CategoryList"
import ProductList from "../products/ProductList"
import CartDetail from '../cart/CartDetail'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3">
                        <CategoryList/>
                    </Col>
                    <Col xs="9">
                        <ProductList/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <CartDetail/>
                    </Col>
                </Row>
            </div>
        )
    }
}
