import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdAttachMoney, MdDateRange, MdStar } from 'react-icons/md';
import { useParams } from 'react-router-dom';

const DetailsData = () => {
  const [data, setData]= useState({})
  const {id}= useParams()
  console.log(data)

  useEffect(()=>{
    axios(`http://localhost:3000/details/${id}`)
    .then(res => setData(res.data))
  },[id])
  const {productName, productImage, brandName, category, description, creationTime, price, rating} = data

  // time and data modification
  const d = new Date(`${creationTime}`)
  const localTime = d.toLocaleString()

  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 bg-green-200 text-white my-6 rounded-lg">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={productImage}
          alt=""
          className="w-full h-60 sm:h-96 bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-green-500">
          <div className="space-y-2">
            <p className="inline-block text-2xl font-semibold sm:text-3xl">
              {productName}
            </p>
            <div className='flex justify-between'>
              <div className="text-xs flex  gap-6">
                By
                <p className="text-xs hover:underline border px-2 rounded-full">
                  {brandName}
                </p>
                <p className="text-xs hover:underline border px-2 rounded-full">
                  {category}
                </p>
              </div>
              <div className='flex items-center border px-2 gap-2 rounded-full'>
                <MdStar/>
                <p>{rating? rating : 0}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <MdAttachMoney />
                <p>{price}</p>
              </div>
              <div className="flex items-center gap-2">
                <MdDateRange />
                <p>{localTime}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsData;