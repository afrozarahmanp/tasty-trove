import React from "react";

const FoodCart = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="bg-slate-900 text-white px-3 py-1 mr-4 mt-4 absolute  right-0">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline mt-8 border-0 border-b-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
