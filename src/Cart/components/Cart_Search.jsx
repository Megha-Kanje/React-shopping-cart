import React from 'react'

const Cart_Search = () => {
    return (
        <div className='cart_search_container'>
            <img src={require('../../images/icons8-filter-30.png')} width="20px" />
            <input type="text" />
            <div className='cart_search_container_icons'>
                <img src={require('../../images/icons8-account-50.png')} />
                <img src={require('../../images/icons8-shield-32.png')} />
                <img src={require('../../images/icons8-bell-32.png')} />
            </div>
        </div>
    )
}

export default Cart_Search
