import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
       
        className=" text-white pt-8"
      >
        <div className="p-36">
          <div className="bg-black bg-opacity-40 p-16 md:flex justify-center items-center flex-col">
            <h2 className="text-5xl mb-5 uppercase">{title}</h2>
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
    </Parallax>
  );
};

export default Cover;
