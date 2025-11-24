import { useState } from "react";
import AnalyseInput from "./AnalyseInput";
import HowItWorks from "./HowItWorks";
import Result from "./Result";
import "./style/Main.css"

export default function Main() {
  const [data, setData] = useState(null);
  return (
    <>
      <div className="main-wrapper">
        <HowItWorks />
        <AnalyseInput setData={setData} />
        <Result data={data} setData={setData}/>
      </div>
    </>
  );
}
