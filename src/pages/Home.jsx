import React from 'react'
import Carousel from '../Components/Carousel/Carousel'
import Card from '../Common/Card/Card'
import Categories from '../Components/Categories/Categories'
import Arrivals from '../Components/Arrivals/Arrivals'
import FlashSale from '../Components/FlashSale/FlashSale'
import OnePic from '../Components/OnePic/OnePic'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    // const notify = () => toast("Wow so easy!");
  return (
    <div>
      {/* <button onClick={notify}>Notify!</button>
      <ToastContainer /> */}
      {/* <Card /> */}
      <Carousel />
      <Card />
      <Categories />
      <FlashSale />
      <OnePic />
      <Arrivals />
    </div>
  )
}

export default Home
