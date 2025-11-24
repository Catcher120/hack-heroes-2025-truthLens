import { useState } from "react";
import AnalyseInput from "./AnalyseInput";
import HowItWorks from "./HowItWorks";
import Result from "./Result";
import Loading from "./Loading"
import "./style/Main.css"

export default function Main() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="main-wrapper">
        <HowItWorks />
        <AnalyseInput setData={setData} isLoading={isLoading} setIsLoading={setIsLoading}/>
        {isLoading && <Loading />}
        {!isLoading && <Result data={data} setData={setData}/>}
      </div>
    </>
  );
}
