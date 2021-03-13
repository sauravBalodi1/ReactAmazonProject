import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';
function CheckoutProduct(props) {
    const [{basket},dispatch]=useStateValue();
   const removeFromBasket=()=>{
         dispatch({
             type:"REMOVE_FROM_BASKET",
             
         })
   }
    return (
        <div className="chkpr">
            <img src={props.image} className="chkpr_img"/>
            <div className="chkpr_info">
                <p className="chk_title">{props.title}</p>
                <p className="chkpr_price">
                    <small>$</small>
                    <strong>{props.price}</strong>

                </p>
                <div className="chkpr_rating">
                   {
                       Array(props.rating).fill().map((_,i)=>(
                           <p>⭐</p>
                       ))
                   }
                </div>
                <button onClick={removeFromBasket}>

                    remove from the basket
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
