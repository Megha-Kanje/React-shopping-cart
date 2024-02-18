import React from 'react'

const Cart_dropDown = ({ cartProducts }) => {
    
    function _handleclickCheckAndViewCart() {
        sessionStorage.setItem('cartItems', JSON.stringify(cartProducts))
    }

    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle my_cart_toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '10rem' }} disabled={!cartProducts.length}>
                Cart&nbsp;({cartProducts.length ? `${cartProducts.length} Items` : `Empty`})
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="/Cart" onClick={_handleclickCheckAndViewCart}>
                    View Cart
                </a></li>
            </ul>
        </div>
    )
}

export default Cart_dropDown
