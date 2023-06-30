import { useState } from "react";

function UseStateObj() {
  const allData = {
    name: "Dip Singha",
    age: 24,
  };

  const [data, setData] = useState(allData);

  const updateObj = () => {
    setData({ ...data, name: "Anjan Singha" });
    console.log(allData);
  };

  return (
    <>
      <div className="flex flex-col gap-6 h-screen justify-center items-center">
        {/* <h1>Name: Dip & Age 24</h1> */}
        {
          <h1 className="text-white font-semibold text-3xl border rounded-full bg-slate-600 py-3 px-6">
            Name: {data.name}, Age: {data.age}
          </h1>
        }
        <button
          className="bg-indigo-50 text-indigo-800 py-2 px-4 text-3xl font-medium rounded-full mt-5 hover:bg-slate-200 duration-300"
          onClick={updateObj}
        >
          Update
        </button>
      </div>
    </>
  );
}

export default UseStateObj;
