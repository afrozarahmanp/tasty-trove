import React from "react";
import "./AboutBanner.css";

const AboutBanner = () => {
  return (
    <div className="about  text-white pt-8 my-20 ">
      <div className="p-36">
        <div className="bg-black bg-opacity-40 p-16 md:flex justify-center items-center flex-col">
          <h2 className="text-5xl mb-5">Tasty Trove</h2>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            neque, corporis ipsa ea, error quas itaque nostrum ipsum quibusdam
            illum ad praesentium ratione temporibus facere voluptas maiores,
            iusto id fugiat. Obcaecati eum optio ut quos perspiciatis harum
            consequatur, ad atque!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
