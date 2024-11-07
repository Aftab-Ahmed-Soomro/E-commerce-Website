import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../ArrivalsModal/ArrivalsModal";

const Arrivals = () => {

  // Modal
  const [cardModal, setCardModal] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardId = (id) =>{
    setSelectedCardId(id);
    setCardModal(true);
  }

  // API
  const [product, setProduct] = useState([]);
  const getData = async () => {
    try {
      const data = await axios.get("https://api.escuelajs.co/api/v1/products");
      const res = data?.data;
      setProduct(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="p-8">
        <div>
          <h1 className="text-3xl font-semibold mb-8">New Arrivals</h1>
        </div>
        <div className="flex flex-wrap gap-9">
          {product.slice(0,20).map((item, index) => (
            <div key={index} onClick={()=>handleCardId(item.id)} className="w-[270px] rounded overflow-hidden shadow-lg cursor-pointer">
              <img
                className="w-full"
                src={item.images}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.description}</p>
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
      <Modal modal={cardModal} selectID={selectedCardId} setModal={setCardModal} />
    </div>
  );
};

export default Arrivals;
