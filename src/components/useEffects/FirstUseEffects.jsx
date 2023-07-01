import React, { useEffect, useState } from "react";

function FirstUseEffects() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Chats ${count > 0 ? `(${count})` : ""}`;
    console.log("Hello UseEffects");
    // count > 0
    //   ? (document.title = `Chats (${count})`)
    //   : (document.title = `Chats`);
  }, [count]);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-indigo-50 flex flex-col gap-10 h-screen justify-center items-center">
      <h1 className="text-6xl font-semibold"> {count}</h1>
      <button
        className="bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-500 duration-300 font-semibold text-xl"
        onClick={countHandler}
      >
        Click 🙂
      </button>
    </div>
  );
}

export default FirstUseEffects;
