import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
function Checkout() {
    
    return (
        <div className="checkout">
            <div className="chk_left">
                <img className="chk_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
           
            <div >
                <h2 className="chk_title">Your Shopping basket</h2>
                {/* {basket item} */}
            </div>
            </div>
            <div className="chk_right">
              <h2>The subtotal look here</h2>
              <Subtotal/>
        </div>
        </div>
        
    )
}

export default Checkout
