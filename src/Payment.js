import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React,{useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import CurrencyFormat from "react-currency-format";
import axios from './axios';
function Payment() {
 const [{basket,user},dispatch]=useStateValue();
   const stripe=useStripe();
   const elements=useElements();
   const [error, seterror] = useState(null);
   const [disabled, setdisabled] = useState(true)
   const [succeeded, setsucceeded] = useState(false);
   const [processing, setprocessing] = useState("");
   const [clientSecret, setClientSecret] = useState(true);
   const history=useHistory();
   useEffect(() => {
     //generate special stripe secret which allows us to charge a customer
     const getclientsecret=async ()=>{
         const response=await axios({
             method:'post',
             //stripe expects the total in a currencies subunits
             url:`/payments/create?total=${getBasketTotal(basket)*100}`
         });
         setClientSecret(response.data.clientSecret);

     }
     getclientsecret();
   }, [basket])
   console.log("secret is : ",clientSecret)
   const handlesubmit=async (e)=>{
       //stripe functionallity
       e.preventDefault();
       setprocessing(true);

    const payload =await stripe.confirmCardPayment(clientSecret,{
       payment_method:{
           card:elements.getElement(CardElement)
       }
    }).then(({paymentIntent})=>{
        //paymentintent=payment confirmation
        setsucceeded(true);
        seterror(null);
        setprocessing(false);
        history.replace('/orders')
    })

   }
   const handlechange=(e)=>{
    //listen for changes in the cardelement
    //and display as errors as the customer types their card details
    setdisabled(e.empty);
    seterror(e.error?e.error.message:"");

   }
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
                        </div>
                        <div className="pmnt_details">
                        {/* {stripe magic} */}
                        <form onSubmit={handlesubmit}>
                         <CardElement onChange={handlechange}/>
                         <div className="pymnt_priceContainer">
                         <CurrencyFormat 
                             renderText={(value)=>(
                                   <>
                                   <h3>Order Total: {value}</h3>
                                   </>

                         )}
                          decimalScale={2}
                         value={getBasketTotal(basket)}
                         displayType={"text"}
                         thousandSeparator={true}
                          prefix={"$"}
                         />
                         <button disabled={processing || disabled || succeeded}>
                             <span>{processing?<p>Processing</p>:"Buy now"}</span>
                         </button>
                         </div>
                        </form>
                        {/* handling error */}
                          {error&&<div>{error}</div>}   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
