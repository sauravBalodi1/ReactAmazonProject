import React from 'react'
import { Link } from 'react-router-dom';
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';

function Payment() {
 const [{basket,user},dispatch]=useStateValue();

    return (
        <div className="payment">
            <div className="pmnt_container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* payment-section delivery */}
                <div className="pmnt_section">
                    <div className="pmnt_title">
                        <h2>Delivery address</h2>
                    </div>
                    <div className="pmnt_address">
                       <p>{user?.email}</p>
                       <p>123 La San Fransico</p>
                       <p>panjab university</p>
                        <p>Chandigarh</p>
                       
                    </div>
                </div>
                {/* Payment section -review items */}
                <div className="pmnt_section">
                <div className="pmnt_title">
                     <h3>Review items and delivery</h3>
                    </div>
                    <div className="pmnt_items">
                   {basket.map(item=>(
                      <CheckoutProduct title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}/>
                   ))}
                   

                    </div>
                </div>
                {/* Payment-Section -Payment method */}
                <div className="pmnt_section">
                    <div className="pmnt_title">
                        <h3>Payment Method</h3>
                        <div className="pmnt_details">
                        {/* {stripe magic} */}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
