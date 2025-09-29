import React, { useEffect, useState } from 'react'
import Sproduct from './Sproduct'

const Sapi = () => {
    let url = 'https://dummyjson.com/products'
    const [products,setProducts] = useState([])
    const getproducts = async()=>{
        let result = await fetch(url)
        let pdata = await result.json()
           console.log(pdata)
        setProducts(pdata.products)
    }

    useEffect(()=>{
       getproducts()
    },[])
  return (
    <>
     <h1 className='text-center font-semibold text-2xl'>Products</h1>

     <div className="container rounded-md gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((item,index)=>{
            return <Sproduct {...item} key={index}/>
        })}
     </div>
    </>
  )
}

export default Sapi