import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    try {
      const data = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      const res = data?.data;
      console.log(res);
      setCategories(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div>
      <div className="p-8">
        <div>
          <h1 className="text-3xl font-semibold mb-16">Featured Categories</h1>
        </div>
        <div className="slider-container py-2">
          <Slider {...settings}>
            {categories.slice(0, 16).map((item, index) => (
              <div
                key={index}
                className="mb-10 py-4 px-20 rounded-lg"
              >
                <img className="rounded-lg" src={item.image} alt={item.name} />
                <h1 className="text-2xl text-center mt-6">{item.name}</h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categories;
