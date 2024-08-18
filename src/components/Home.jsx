import React, { useEffect, useState } from "react";
import Card from "./Card";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import axios from "axios";

const Home = () => {
  //for pagination
  const itemPerPage = 6;
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(0);
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];

  // those state for data of category and brand
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  // this state for all data
  const [allData, setAllData] = useState([]);

  // those state for filtering data by category and brandName
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  //sorting system
  const [sort, sortData] = useState("")

  // searching system
  const handleSearch=(e)=>{
    e.preventDefault()
    const name = e.target.name.value
    console.log(name)
    axios(`http://localhost:3000/search-data?name=${name}`)
    .then(res => setAllData(res.data))
  }

  const fetchAllData = () => {
    fetch(`http://localhost:3000/items?category=${category}&brand=${brand}&page=${selected}&size=${itemPerPage}&sort=${sort}`)
      .then((res) => res.json())
      .then((d) => setAllData(d));
  };
  const fetchNumberOfData = () => {
    fetch(`http://localhost:3000/countNumberOfData?category=${category}&brand=${brand}`)
      .then((res) => res.json())
      .then((d) => setCount(d.counts));
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
  }, [category, brand, selected, itemPerPage, sort]);

  return (
    <div className="my-16">
      <div className=" space-y-2">
        <h2 className="text-xl font-bold text-gray-700 pl-4 border-l-8 border-green-400">
          Find the desire product_
        </h2>

        <form
          onSubmit={handleSearch}
          className="w-full flex bg-green-50 rounded-lg overflow-hidden outline-green-400">
          <input
            type="text"
            name="name"
            placeholder="Give input here"
            className="w-[80%]  bg-transparent p-1 border-none outline-green-400 text-green-700 outli"
          />
          <input
            type="submit"
            value="Search"
            className="w-[20%] bg-green-400 font-semibold"
          />
        </form>
      </div>
      <div className="">
        <section className="text-right">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="bg-green-100 px-2 rounded-md m-2 font-medium shadow-md">
              Sort By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <button onClick={() => sortData("lowToHigh")}>
                  Price: Low to high
                </button>
              </li>
              <li>
                <button onClick={() => sortData("highToLow")}>
                  Price: High to low
                </button>
              </li>
              <li>
                <button onClick={() => sortData("latest")}>Newest first</button>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex gap-8">
          <aside className="p-4 w-[20%] text-xs md:text-sm bg-green-50 space-y-6 rounded-lg">
            <div>
              <h2 className="font-semibold text-lg text-gray-600">
                Categories
              </h2>
              {categories.map((ca, i) => (
                <button
                  onClick={() => setCategory(ca)}
                  className={
                    ca === category
                      ? "m-1 bg-green-300 py-0 px-1 font-semibold text-gray-600 rounded-md"
                      : "m-1 bg-slate-300 py-0 px-1 font-semibold text-gray-600 rounded-md"
                  }
                  key={i}>
                  {ca}
                </button>
              ))}
            </div>
            <div>
              <h2 className="font-semibold text-lg text-gray-600">Brands</h2>
              {brands.map((b, i) => (
                <button
                  onClick={() => setBrand(b)}
                  className={
                    b === brand
                      ? "m-1 bg-green-300 py-0 px-1 font-semibold text-gray-600 rounded-md"
                      : "m-1 bg-slate-300 py-0 px-1 font-semibold text-gray-600 rounded-md"
                  }
                  key={i}>
                  {b}
                </button>
              ))}
            </div>
          </aside>
          <div className="">
            <div>
              {allData?.length > 0 && (
                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4 px-4 md:pb-6 md:px-6 lg:pb-8 lg:px-8 min-h-[50vh]">
                  {allData.map((details, i) => (
                    <Card key={i} details={details}></Card>
                  ))}
                </main>
              )}
              {allData?.length === 0 && (
                <div className="min-w-[65vw] lg:min-w-[72vw] min-h-[100vh] rounded-md text-xl font-semibold text-green-400 bg-gray-100 p-6 flex items-center justify-center">
                  <h3>There are no content here</h3>{" "}
                </div>
              )}
            </div>
            <div className="space-x-2 mx-auto pl-4 md:pl-4 lg:pl-6">
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
