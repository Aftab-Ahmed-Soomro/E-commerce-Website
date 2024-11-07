import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FlashSale = () => {

    //API 
    const [product, setProduct] = useState([]);
    const getData = async() => {
        try{

            const data = await axios.get('https://fakestoreapi.in/api/products');
            const res = data?.data
            console.log(res);
            setProduct(res);
            if (res.status === 'SUCCESS' && Array.isArray(res.products)) {
                setProduct(res.products);  // Set the products array in state
              } else {
                console.error('Unexpected response structure:', res);
              }
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
      <div className="p-8">
        <div>
          <h1 className="text-3xl font-semibold mb-8">Flash Sales</h1>
        </div>
        <div className="flex flex-wrap gap-9">
          {product.slice(0,4).map((item, index) => (
            <div className="w-[270px] rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={item.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title.slice(0,80)}</div>
                <p className="text-gray-700 text-base">{item.description.slice(0,130)}</p>
              </div>
              <div className="px-6 pt-4 pb-2 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  $ {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FlashSale
