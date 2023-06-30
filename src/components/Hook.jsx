import { useState } from "react";

function Hook() {
  const [title, setTitle] = useState("Title is empty");

  const changeTitle = () => {
    // setName(!name);
    // name ? "Dip Singha" : "Title is empty";

    title === "Title is empty"
      ? setTitle("Title created")
      : setTitle("Title is empty");
  };
  // console.log("value is:" + name);
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-white font-bold text-6xl">{title}</h1>
      <button
        className="bg-white mt-10 py-2 px-4 text-2xl rounded-md hover:bg-slate-300 duration-300 font-medium"
        onClick={changeTitle}
      >
        Click me
      </button>
    </div>
  );
}

export default Hook;
