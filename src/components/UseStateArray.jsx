import { useState } from "react";

function UseStateArray() {
  const allData = [
    {
      id: 0,
      name: "Dip Singha",
      age: 24,
    },
    {
      id: 1,
      name: "Sunny Nondy",
      age: 24,
    },
    {
      id: 2,
      name: "Joy Dhor",
      age: 23,
    },
  ];

  const [data, setData] = useState(allData);

  // event handler
  const clearArray = () => {
    setData([]);
    // console.log(allData);
  };

  const removeElement = (id) => {
    const newAllData = data.filter((item) => {
      return item.id !== id;
    });
    setData(newAllData);

    console.log(id);
  };

  return (
    <div className="flex flex-col gap-6 h-screen justify-center items-center">
      {data.map((item, index) => (
        <>
          <h1
            className="text-white font-semibold text-3xl border rounded-full bg-slate-600 py-3 px-6"
            key={index}
          >
            Name: {item.name}, Age: {item.age}
            <button
              className="text-indigo-50 font-normal text-2xl ml-10 px-3 rounded-xl bg-red-800 cursor hover:bg-red-700/80 duration-300"
              onClick={() => removeElement(item.id)}
            >
              remove
            </button>
          </h1>
        </>
      ))}
      <button
        className="bg-indigo-50 text-indigo-800 py-2 px-4 text-3xl font-medium rounded-full mt-5 hover:bg-slate-200 duration-300"
        onClick={clearArray}
      >
        Clear
      </button>
    </div>
  );
}

export default UseStateArray;
