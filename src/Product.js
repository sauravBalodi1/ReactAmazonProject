import React from 'react'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import "./Product.css"
function Product(props) {
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
         <button >Add to basket</button>
        </div>
        
    )
}

export default Product
