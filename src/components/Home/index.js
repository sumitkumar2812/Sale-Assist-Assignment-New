import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../Card"

import"./index.css"

function ProductsPage() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setProducts(response.data);
                console.log(response.data);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchProducts();
        
    }, []); // Empty dependency array ensures that useEffect only runs once on component mount

    console.log(products)
    return (
        <div>
            
        <h1 className='category-heading'>Men's Clothes</h1>
            <div className='main-background'>
            
                {products.map((data) => {
                    return (
                       <div>
                       
                            {data.category === "men's clothing" ? <Card data={data}/> : null}
                            
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ProductsPage;
