import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="border-b-8 mb-5">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="mt-20 mb-16">
        <div className="grid md:grid-cols-2 gap-10 ">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline mt-8 border-0 border-b-4">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
