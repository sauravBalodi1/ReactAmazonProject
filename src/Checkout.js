import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Product from './Product';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket,user},dispatch]=useStateValue();
      
    return (
        <div className="checkout">
            <div className="chk_left">
                <img className="chk_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
           
            <div >
                <h2>hello {user?.email}</h2> {/* questionmark is added because their is a async period ,so to violate tha*/}
                <h2 className="chk_title">Your Shopping basket</h2>
                {/* {basket item} */}
                {basket.map((item)=>(
                    <CheckoutProduct title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                 {/* <Product title={basket}/> */}
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
