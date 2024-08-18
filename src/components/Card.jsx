import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ details }) => {
  const { productName, price, description, category, brandName, productImage, _id } =
    details;
  return (
    <Link to={`/details/${_id}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={productImage} alt={productName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p>{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-sm font-semibold text-gray-500 border px-2 rounded-full">
              <MdOutlineAttachMoney />
              <p>{price}</p>
            </div>
            <div className="space-x-2">
              <div className="badge badge-outline">{category}</div>
              <div className="badge badge-outline">{brandName}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
