import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background: rgba(250, 250, 250, 1);
  width: 100%;
  height: 100%;
  min-height: 100vh;

  & h1 {
    text-transform: uppercase;
    letter-spacing: -1px;
  }

  & .shortInputContainer,
  .shortedURL {
    display: flex;
    width: 60%;
    gap: 10px;
  }

  & .shortInputContainer input[type="text"],
  .shortedURL input[type="text"]:read-only {
    flex: 1 0 70%;
    height: 50px;
    width: 100%;
    border: 1px solid rgba(215, 215, 215, 1);
    border-radius: 5px;
    padding: 0px 10px;
    font-family: var(--main-font);
    font-size: 18px;
    letter-spacing: -1px;
  }

  .shortedURL input[type="text"]:read-only {
    background: rgba(245, 245, 245);
  }

  & .shortInputContainer button,
  .shortedURL button {
    font-family: var(--main-font);
    font-size: 18px;
    letter-spacing: -1px;
    font-weight: 700;
    flex: 1 0 20%;
    background: navy;
    border: none;
    color: #fff;
    border-radius: 5px;
  }

  & .shortInputContainer button:hover,
  .shortedURL button:hover {
    cursor: pointer;
  }

  & .linkHistory {
    font-family: var(--main-font);
    font-size: 18px;
    width: 60%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 0;
    list-style: none;
  }

  & .linkHistory .linkItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    background: #fff;
    padding: 20px;
    border-bottom: 1px solid rgba(240, 240, 240, 1);
  }

  & .shortsContainer {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  & .longUrl {
    color: rgba(75, 75, 75, 1);
  }

  & .shortsContainer .shortUrl {
    color: navy;
  }

  & .shortsContainer button {
    width: 50px;
    height: 30px;
    border-radius: 3px;
    border: none;
    background: navy;
    color: #fff;
    font-size: 14px;
    font-family: var(--main-font);
  }

  & .shortsContainer button:hover {
    cursor: pointer;
  }
`;
