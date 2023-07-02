import React, { createContext } from "react";
import CompB from "./CompB";

const data = createContext();

function CompA() {
  return (
    <data.Provider value={"Dip Singha"}>
      <CompB />
    </data.Provider>
  );
}

export default CompA;
export { data };
