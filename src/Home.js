import React from 'react'
import "./Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            
          <div className="home_container">
<img src="https://www.aquaupgrade.com/wp-content/uploads/2020/08/AmazonPrimeVideo-genetic.jpg" className="home_image"/>
          
          <div className="home_row">
              {/*product */}
              <Product title="helloo" price={26} rating={4} image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
              <Product title="checkout this item" price={40} rating={3} image="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"/>
              {/*product */}
            
          </div>
          <div className="home_row">
               {/*product */}
               <Product title="nice and cripsy" price={40} rating={4} image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"/>
               <Product title="will order it from zomato" price={20}rating={2} image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"/>
               <Product title="do checkout this feature" price={10.2} rating={2} image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"/>
              {/*product */}
                {/*product */}
          </div>
          <div className="home_row">
               {/*product */}
            
               <Product title="salad mix plus othe vegetables" price={100} rating={5} image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"/>
          </div>
          </div>
        </div>
    )
}

export default Home
