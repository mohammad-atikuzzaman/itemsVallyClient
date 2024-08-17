import axios from "axios";
import React from "react";

const AddData = () => {
  const handleSubmit =(e)=>{
    e.preventDefault()
    const form = e.target
    const productName = form.name.value
    const brandName = form.brand.value
    const productImage = form.image.value
    const description = form.description.value
    const price = form.price.value
    const category = form.category.value
    
    const creationTime = new Date().toLocaleString();


    const sendData = {
      productName,
      productImage,
      brandName,
      description,
      price,
      category,
      creationTime,
    };
    // console.log(sendData)
   axios.post("http://localhost:3000/items", sendData)
   .then(res => console.log(res))
  }
  return (
    <div className="my-12 p-8 bg-slate-100 rounded-lg" >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="product name"
          className="w-full border my-2 p-2"
        />
        <br />
        <input
          type="text"
          name="brand"
          id="brand"
          placeholder="brand name"
          className="w-full border my-2 p-2"
        />
        <br />
        <input
          type="text"
          name="image"
          id="image"
          placeholder="product image"
          className="w-full border my-2 p-2"
        />
        <br />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description"
          className="w-full border my-2 p-2"
        />
        <br />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="price"
          className="w-full border my-2 p-2"
        />
        <br />
        <input
          type="text"
          name="category"
          id="category"
          placeholder="category"
          className="w-full border my-2 p-2"
        />
        <br />
        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="rating"
          className="w-full border my-2 p-2"
        />
        <br />
        <input
          type="submit"
          value="Submit"
          className="w-full border my-2 p-2 bg-green-400 font-semibold"
        />
      </form>
    </div>
  );
};

export default AddData;
