import React, { useEffect, useState } from 'react'
import "../css/Cart.css"
import Cart_Search from '../components/Cart_Search'
import Cart_Item_Display from '../components/Cart_Item_Display'
import { useNavigate } from 'react-router-dom'

const Cart_Wrapp = () => {
    const [orderSummaryDetails, setOrderSummaryDetails] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (orderSummaryDetails.length === 0)
            setOrderSummaryDetails(JSON.parse(sessionStorage.getItem('cartItems')))
    }, [])

    function _handleClickRemoveOrder(id) {
        const afterDeleteItem = [...orderSummaryDetails].filter(item => item.productID !== id)
        sessionStorage.setItem('cartItems', JSON.stringify(afterDeleteItem))
        if (afterDeleteItem.length) {
            setOrderSummaryDetails(afterDeleteItem)
        }
        else {
            navigate('/')
        }
    }
    return (
        <div className='cart_wrapp'>
            <Cart_Search />
            <div className='cart_label'>Shopping Cart</div>
            <Cart_Item_Display orderSummaryDetails={orderSummaryDetails} _handleClickRemoveOrder={_handleClickRemoveOrder} />
        </div>
    )
}

export default Cart_Wrapp
