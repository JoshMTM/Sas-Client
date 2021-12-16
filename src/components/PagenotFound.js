import React, { useState, useEffect } from "react";
import axios from "axios";
import LottieControl from "./LottieControl";

function PagenotFound() {
  const [someJson, setJson] = useState(null);
  const [lottieYoga, setYoga] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://assets9.lottiefiles.com/private_files/lf30_voeggsxz.json"
      );
      setJson(res.data);
    }
    getData();
  }, []);
  useEffect(() => {
    async function getData() {
      const yogaRes = await axios.get(
        "https://assets9.lottiefiles.com/packages/lf20_q7uarxsb.json"
      );
      setYoga(yogaRes.data);
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Lost?</h1>
      <LottieControl animation={someJson} width={500} height={500} />
      <LottieControl animation={lottieYoga} width={500} height={500} />
      <h1>Take a deep breath and go back</h1>
    </div>
  );
}

export default PagenotFound;
