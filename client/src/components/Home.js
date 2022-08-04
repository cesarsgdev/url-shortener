import { useEffect, useState } from "react";
import { MainContainer } from "./styled/MainContainer.styled";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Home = () => {
  const [shortedUrl, setShortedUrl] = useState("");
  const [url, setUrl] = useState("");
  const [localLinks, setLocalLinks] = useState(
    JSON.parse(localStorage.getItem("links")) || []
  );

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

      const shorted = await fetch("api/urls", options);
      const data = await shorted.json();
      if (data.success) {
        setShortedUrl((oldUrl) => "https://xhort.co/" + data.data.slug);
        setLocalLinks((oldLinks) => [
          { slug: data.data.slug, url: data.data.url },
          ...oldLinks,
        ]);
        localStorage.setItem("links", JSON.stringify(localLinks));
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
      <ul className="linkHistory">
        {localLinks &&
          localLinks.map((link, i) => {
            return (
              <li className="linkItem" key={i}>
                <span className="longUrl">
                  {link.url.length > 55
                    ? link.url.slice(0, 55) + "..."
                    : link.url}
                </span>
                <span className="shortsContainer">
                  <span className="shortUrl">https://xhort.co/{link.slug}</span>
                  <span className="copyShort">
                    <CopyToClipboard text={`https://xhort.co/${link.slug}`}>
                      <button>Copy</button>
                    </CopyToClipboard>
                  </span>
                </span>
              </li>
            );
          })}
      </ul>
    </MainContainer>
  );
};

export default Home;
