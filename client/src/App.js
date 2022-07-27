import { useState, useEffect } from "react";
import Home from "./components/Home";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const callApi = async () => {
      const url = await fetch("/api/urls");
      const data = await url.json();
      console.log(data);
      setData(data);
    };

    callApi();
  }, []);

  return <Home />;
}

export default App;
