import React, { useState } from 'react'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import "./Product.css"
import { useStateValue } from './StateProvider';
function Product(props) {
 const [{basket}, dispatch]= useStateValue();
  
    const addToBasket=()=>{
        //dispatch item in the data layer
       dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:props.id,
                title:props.title,
                image:props.image,
                price:props.price,
                rating:props.rating,
            },
           });

      
    };

    return (
        <div className="product"> 
            <div className="product_info">
                <p>{props.title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product_rating">
               
                {Array(props.rating).fill().map((_,i)=>( <p>⭐</p>))}

              {/* <StarOutlineIcon className="star"/>
              <StarOutlineIcon className="star"/>
              <StarOutlineIcon className="star"/>
              <StarOutlineIcon className="star"/> */}
                </div>
            </div>
            <img src={props.image} className="product_image"/><br/>
         <button onClick={addToBasket}>Add to basket</button>
        </div>
        
    )
}

export default Product
