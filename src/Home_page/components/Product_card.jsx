import React from 'react'

const Product_card = ({ details, _addProductFromCart }) => {
    return (
        <>
            <div className='product_card' key={details.productID}>
                <div className="product_card_img_continer">
                    <img src={details.imgsrc} className='product_card_img' />
                </div>
                <div className="product_card_details_wrapp">
                    <div className="product_card_name">{details.name}</div>
                    <div className="product_card_description">{details.description}</div>
                    <div className="product_card_price">{details.cost}</div>
                </div>
                <div className="product_card_actions">
                    <button className='addToCart_btn' onClick={() => _addProductFromCart(details)}>Add To Cart</button>
                    <button className='card_view_btn'>View</button>
                </div>
            </div>
        </>
    )
}

export default Product_card
