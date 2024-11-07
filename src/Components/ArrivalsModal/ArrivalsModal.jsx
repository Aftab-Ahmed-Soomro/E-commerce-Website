import axios from "axios";
import "./ArrivalsModal.css";
import { useEffect, useState } from "react";

const Modal = ({ modal, setModal, selectID }) => {
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

  //Modal
  const singleData = product.find((item) => {
    return item.id == selectID;
  });

  const [filter, setFilter] = useState(singleData ? singleData.images : "");

  useEffect(() => {
    if (singleData && singleData.images) {
      setFilter(singleData.images);
    }
  }, [singleData]);

  const filterImage = (images) => {
    setFilter(images);
  };

  return (
    <div>
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-center">
              <div>
                <img
                  className="w-[410px] h-[450px] rounded-s-lg"
                  src={filter}
                  alt=""
                />
              </div>
              <div className="bg-white flex flex-col gap-4 py-7 px-6 rounded-e-lg w-[410px]">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-2xl">{singleData.title}</h1>
                  <i
                    onClick={() => setModal(false)}
                    class="fa-solid fa-circle-xmark text-4xl cursor-pointer"
                  ></i>
                </div>
                {/* <div className='flex gap-3'>
          <p className='font-medium text-xl'>{singleData.disPrice}</p>
          <p className='text-gray-500 font-normal text-lg decoration'>{singleData.orgPrice}</p>
      </div> */}
                <p className="text-gray-500 text-base">
                  {singleData.description}
                </p>
                <div>
                  <button className="text-white bg-black w-full py-4 rounded-lg mt-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
