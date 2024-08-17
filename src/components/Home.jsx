import React, { useEffect, useState } from "react";
import Card from "./Card";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";

const Home = () => {
  // this state for all data
  const [allData, setAllData] = useState([]);

  //for pagination
  const itemPerPage = 2;
  const [selected, setSelected] = useState(0);

  console.log("selected", selected);
  const numberOfPages = Math.ceil(allData.length / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log(Math.max(...pages));

  // those state for data of category and brand
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  // those state for filtering data by category and brandName
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const fetchAllData = () => {
    fetch(
      `http://localhost:3000/items?category=${category}&brand=${brand}&page=${selected}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((d) => setAllData(d));
  };

  const fetchCategoryAndBrands = () => {
    fetch("http://localhost:3000/filters")
      .then((res) => res.json())
      .then((d) => {
        setCategories(d.categories);
        setBrands(d.brands);
      });
  };

  useEffect(() => {
    fetchCategoryAndBrands();
    fetchAllData();
    fetchNumberOfData();
  }, [category, brand, selected, itemPerPage]);

  return (
    <div className="my-16">
      <div className=" space-y-2">
        <h2 className="text-2xl font-bold text-gray-700">
          Find the desire product_
        </h2>
        <form
          action=""
          className="w-full flex bg-green-50 rounded-lg overflow-hidden border border-green-400">
          <input
            type="text"
            placeholder="Give input here"
            className="w-[80%]  bg-transparent p-2 border-none outline-none text-green-400"
          />
          <input
            type="submit"
            value="Search"
            className="w-[20%] bg-green-400 font-semibold"
          />
        </form>
      </div>
      <div className="">
        <section className="text-right"> shortby</section>
        <section className="flex gap-8">
          <aside className="p-4 w-[20%] bg-green-50 space-y-6 rounded-lg">
            <div>
              <h2 className="font-semibold text-xl text-gray-600">
                Categories
              </h2>
              {categories.map((ca, i) => (
                <button
                  onClick={() => setCategory(ca)}
                  className="m-1 bg-green-200 py-0 px-1 font-semibold text-gray-600 rounded-md"
                  key={i}>
                  {ca}
                </button>
              ))}
            </div>
            <div>
              <h2 className="font-semibold text-xl text-gray-600">Brands</h2>
              {brands.map((b, i) => (
                <button
                  onClick={() => setBrand(b)}
                  className="m-1 bg-green-200 py-0 px-1 font-semibold text-gray-600 rounded-md"
                  key={i}>
                  {b}
                </button>
              ))}
            </div>
          </aside>
          <div>
            <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allData.map((details, i) => (
                <Card key={i} details={details}></Card>
              ))}
            </main>
            <div className="space-x-2">
              <button
                onClick={() =>
                  selected > 0 ? setSelected(selected - 1) : setSelected(0)
                }
                className="p-2 font-semibold bg-green-200 rounded-lg">
                {" "}
                <TbPlayerTrackPrev />
              </button>
              {pages.map((p, i) => (
                <button
                  onClick={() => setSelected(p)}
                  className={
                    p == selected
                      ? "bg-green-400 p-2 rounded-lg"
                      : "bg-gray-400 rounded-lg p-2"
                  }
                  key={i}>
                  {p + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  Math.max(...pages) > selected
                    ? setSelected(selected + 1)
                    : setSelected(Math.max(...pages))
                }
                className="p-2 font-semibold bg-green-200 rounded-lg">
                <TbPlayerTrackNext />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
