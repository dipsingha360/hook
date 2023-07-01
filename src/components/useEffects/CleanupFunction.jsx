import React, { useEffect, useState } from "react";

function CleanupFunction() {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const [heightCount, setHeightCount] = useState(window.screen.height);

  const actualWidth = () => {
    setWidthCount(window.innerWidth);
    setHeightCount(window.innerHeight);
  };

  useEffect(() => {
    console.log("hello useEffect");
    window.addEventListener("resize", actualWidth);

    // this is cleanup function
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <div className="flex flex-col gap-10 h-screen justify-center items-center">
      <p className="text-indigo-50 text-2xl">
        Actual width and height of this window
      </p>
      <h1 className="text-indigo-50 bg-indigo-600 px-5 py-2 rounded-lg font-bold text-3xl">
        {`${widthCount} x ${heightCount}`}
      </h1>
    </div>
  );
}

export default CleanupFunction;
