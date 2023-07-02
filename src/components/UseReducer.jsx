import React, { useEffect, useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function UseReducer() {
  const [counter, dispatch] = useReducer(reducer, initialState);

  // useEffect hook used for sideffect on outside of the scope/function. In this case it is used for incress the chat count on browser tab title.
  useEffect(() => {
    document.title = `Chats ${counter > 0 ? `(${counter})` : ""}`;
    console.log("Hello UseEffects");
    // count > 0
    //   ? (document.title = `Chats (${count})`)
    //   : (document.title = `Chats`);
  }, [counter]);

  return (
    <div className="text-indigo-50 flex flex-col gap-10 h-screen justify-center items-center">
      <h1 className="text-6xl font-semibold"> {counter}</h1>
      <div className="btns flex gap-5">
        <button
          className="bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-500 duration-300 font-semibold text-xl"
          onClick={() => dispatch("increment")}
        >
          Increment ⬆️
        </button>
        <button
          className="bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-500 duration-300 font-semibold text-xl"
          onClick={() => dispatch("decrement")}
        >
          Decrement ⬇️
        </button>
      </div>
    </div>
  );
}

export default UseReducer;
