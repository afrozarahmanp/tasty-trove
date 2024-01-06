import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20 ">
      <SectionTitle
        heading="Featured Items"
        subHeading="Check It Out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-black bg-opacity-40">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>January 01, 2024</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            neque, corporis ipsa ea, error quas itaque nostrum ipsum quibusdam
            illum ad praesentium ratione temporibus facere voluptas maiores,
            iusto id fugiat. Obcaecati eum optio ut quos perspiciatis harum
            consequatur, ad atque!
          </p>
          <button className="btn btn-outline text-white border-0 border-b-4">Order Now</button>

        </div>
      </div>
    </div>
  );
};

export default Featured;
