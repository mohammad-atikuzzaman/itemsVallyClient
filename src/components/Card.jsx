import React from 'react';
import {  MdOutlineAttachMoney } from 'react-icons/md';

const Card = ({details}) => {
  const {productName, price, description, category, brandName}= details
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>{description}</p>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-1 font-semibold text-gray-500 border px-2 rounded-full'>
            < MdOutlineAttachMoney />
            <p>{price}</p>
          </div>
          <div className="space-x-2">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{brandName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;