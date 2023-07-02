import React, { useContext } from "react";
import { data } from "./CompA";

function CompC() {
  const name = useContext(data);
  return <div className="text-indigo-50">{name}</div>;
}

export default CompC;
