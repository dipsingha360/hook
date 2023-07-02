import React, { useRef, useState } from "react";

function Uncontrolled() {
  const email = useRef(null);
  const [allData, setAllData] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const element = email.current.value;
    element ? setAllData(element) : alert("Please fill the data");
  };

  return (
    <>
      {/* Uncontrolled form,  in the uncontrol form we use "useRef" hook to get the data from form  */}
      <form
        className="flex flex-col gap-8 w-screen h-screen  justify-center items-center"
        action=""
        onSubmit={submitForm}
      >
        <div className="text-indigo-400 flex flex-col  gap-2 ">
          <label className="text-xl font-extralight ml-5" htmlFor="email">
            Email
          </label>
          <input
            className="text-indigo-800 bg-indigo-50 font-semibold pl-5  w-80 h-12 rounded-full"
            type="text"
            name="email"
            id="email"
            ref={email}
          />
        </div>

        <button
          className=" text-indigo-50 bg-indigo-600 font-semibold w-40 h-8 cursor-pointer hover:bg-indigo-500 duration-300 rounded-full"
          type="submit"
        >
          Submit
        </button>
        {allData ? (
          <p className="text-indigo-50/50 bg-indigo-500/30 px-5 py-3 rounded-lg">
            Email: {allData}
          </p>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

export default Uncontrolled;
