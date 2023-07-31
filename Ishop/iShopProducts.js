import { Link, useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"


export function IShopProducts()
{

    const[category,setCategory] = useState()
    const [{products,setProducts,id}] = useState([])

    useEffect(()=>{
        setCategory()
        axios.get("http://localhost:4477/getproducts")
        .then(response =>{
            setProducts(response.data)
        })
    },[])
   
    return(
        <div>
            <h2>{category} List</h2>
           <ol>

               {
                
                   products.map(product=>
                    
                    <li key={product.id}>
                        <img src={[product.image]} width="50" height="50"/>
                    </li>
                    )

               }

           </ol>
           <div>
            <Link to="/dashboard"> Back to Categories</Link>
           </div>
        </div>
    )
}