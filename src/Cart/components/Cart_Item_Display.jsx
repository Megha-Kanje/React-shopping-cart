import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Cart_Item_Display = ({ orderSummaryDetails, _handleClickRemoveOrder }) => {


    return (
        <Row>
            <Col xl={7} lg={7} md={7} sm={12} xs={12}>
                <table className='cart_table'>
                    <tbody>
                        {orderSummaryDetails.map((order, index) => {
                            return <tr key={order.productID} style={{ borderTop: index === 0 ? '1px solid rgba(0,0,0,.1)' : '' }}>
                                <td><img src={order.imgsrc} /></td>
                                <td>{order.name}</td>
                                <td>{order.cost}</td>
                                <td style={{ cursor: 'pointer' }} onClick={() => _handleClickRemoveOrder(order.productID)}>X</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </Col>
            <Col xl={5} lg={5} md={5} sm={12} xs={12}>
                <div className="order_summary_wrapp">
                    <div className='order_summary_label' >Order Summary</div>
                    <div className='order_summary_details' >
                        <div>Products</div>
                        <div>2</div>
                    </div>
                    <div className='order_summary_details' style={{ '--border-color': "black" }}>
                        <div>Products Count</div>
                        <div>{orderSummaryDetails.length}</div>
                    </div>
                    <div className='order_summary_details'>
                        <div>Total</div>
                        <div>{orderSummaryDetails.reduce((total, item) => {
                            const cost = item.cost.slice(1, item.cost.length)
                            return total += parseInt(cost)
                        }, 0)}</div>
                    </div>
                    <button>Procede To Checkout</button>
                </div>
            </Col>
        </Row>
    )
}

export default Cart_Item_Display
