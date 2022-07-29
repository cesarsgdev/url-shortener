import { useEffect, useState } from "react";
import { MainContainer } from "./styled/MainContainer.styled";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Home = () => {
  const [shortedUrl, setShortedUrl] = useState("");
  const [url, setUrl] = useState("");
  const [localLinks, setLocalLinks] = useState(localStorage.getItem("links"));

  const handleChange = (e) => {
    setUrl((oldUrl) => e.target.value);
  };

  const handleXhort = (e) => {
    const callApi = async () => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      };

      console.log(options);
      const shorted = await fetch("api/urls", options);
      const data = await shorted.json();
      console.log(data);
      if (data.success) {
        setShortedUrl((oldUrl) => "https://xhort.co/" + data.data.slug);
        localStorage.setItem(
          "links",
          JSON.stringify([{ slug: data.data.slug, url: data.data.url }])
        );
      }

      return;
    };

    callApi();
  };

  return (
    <MainContainer>
      <h1>xhort.co</h1>
      <section className="shortInputContainer">
        <input type="text" value={url} onChange={handleChange} />
        <button onClick={handleXhort}>Xhort</button>
      </section>
      <section className="shortedURL">
        <input type="text" value={shortedUrl} readOnly />
        <CopyToClipboard text={shortedUrl}>
          <button>Copy</button>
        </CopyToClipboard>
      </section>
    </MainContainer>
  );
};

export default Home;
