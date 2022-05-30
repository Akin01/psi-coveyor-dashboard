import React from "react";
import Grafik from "./Report/Grafik";
import LogStatus from "./Report/LogStatus";

const Report = () => {
  return(
    <div className="flex flex-col w-full max-h-screen bg-slate-200">
      <Grafik/>
      <LogStatus/>
    </div>
  )
}
export default Report;