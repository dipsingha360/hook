import React, { useState } from "react";

function BasicForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allData, setAllData] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (email && password) {
      const data = { id: new Date().getTime(), email, password };
      setAllData([...allData, data]);
      // console.log(allData);

      //empty input field after submit
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill the email and password both");
    }
  };

  return (
    <>
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="text-indigo-400 flex flex-col  gap-2 ">
          <label className="text-xl font-extralight ml-5" htmlFor="password">
            Password
          </label>
          <input
            className="  text-indigo-800 bg-indigo-50 font-semibold pl-5  w-80 h-12 rounded-full"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className=" text-indigo-50 bg-indigo-600 font-semibold w-40 h-8 cursor-pointer hover:bg-indigo-500 duration-300 rounded-full"
          type="submit"
        >
          Submit
        </button>
        {allData.map((item) => (
          <p
            className="text-indigo-50/50 bg-indigo-500/30 px-5 py-3 rounded-lg"
            key={item.id}
          >
            Email: {item.email} | Unique id: {item.id}
          </p>
        ))}
      </form>
    </>
  );
}

export default BasicForm;
