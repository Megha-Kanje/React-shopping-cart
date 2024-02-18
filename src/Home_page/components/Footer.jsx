import React from 'react'

const Footer = () => {
    return (
        <div className='footer_wrapp'>
            <div className="footer_headers">
                <div className="footer_heads">Category</div>
                <div className="footer_heads">Information</div>
                <div className="footer_heads">My Account</div>
                <div className="footer_heads">Contact Us</div>
            </div>
            <div className="footer_header_childerns_conti">
                <div className="footer_header_child">
                    <div>Baby Bags</div>
                    <div>Backpacks</div>
                    <div>Beach Bags</div>
                    <div>Cluches</div>
                    <div>Cosmetic Pouches</div>
                </div>
                <div className="footer_header_child">
                    <div>Specials</div>
                    <div>New Products</div>
                    <div>Best Sellers</div>
                    <div>Our Stores</div>
                    <div>Contact Up</div>
                </div>
                <div className="footer_header_child">
                    <div>My Order</div>
                    <div>My Merchendise Returns</div>
                    <div>My Credit Slip</div>
                    <div>My Address</div>
                    <div>My Personal Info</div>
                </div>
                <div className="footer_header_child">
                    <div style={{ color: '#000', fontWeight: '400', fontSize: '14px' }}>Lorem ipsum dolor sit.</div>
                    <div>+91 12345678908</div>
                    <div>abcf.123@jh.com</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
