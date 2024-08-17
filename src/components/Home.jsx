import React, { useState } from "react";

const Home = () => {
   const [category, setCategory]= useState("")
   const [brand, setBrand]= useState("")
   const

  return (
    <div className="">
      <div className="my-4 space-y-2">
        <h2 className="text-2xl font-semibold">Find the desire product_</h2>
        <form action="" className="w-full flex bg-green-50 rounded-lg overflow-hidden border border-green-400">
          <input type="text" placeholder="Give input here" className="w-[80%]  bg-transparent p-2 border-none outline-none text-green-400"/>
          <input type="submit" value="Search" className="w-[20%] bg-green-400 font-semibold"/>
        </form>
      </div>
      <div className="">
        <section className="text-right"> shortby</section>
        <section className="flex gap-8">
          <aside className="p-4">category</aside>
          <main> items</main>
        </section>
      </div>
    </div>
  );
};

export default Home;
