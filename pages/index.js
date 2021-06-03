import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import Navbar from "./components/Navbar";

const Hero = styled.div`
  background-image: url(/hero.jpg);
  opacityL .9;
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const Landing = styled.div`
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 1rem;
`;

const Heading = styled.h1`
  font-family: "Garamond", Serif;
  color: white;
  font-size: 6rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  text-shadow: 1px 1px #000;
`;

const StyledButton = styled.button`
  height: 40px;
  width: 220px;
  background-color: orange;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ChatButton = styled.button`
  height: 60px;
  width: 60px;
  background-color: green;
  border: none;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
`;

const ChatButtonPlacement = styled.div`
  padding-bottom: 50px;
  padding-left: 800px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Beechcroft</title>
      </Head>
      <Hero>
        <Navbar />
        <Landing>
          <Heading>
            Luxury retirement <br />
            homes for you
            <StyledButton>
              <strong>Explore our properties</strong>
              <img src="/icon-arrow-right.svg" alt="right" />
            </StyledButton>
          </Heading>
          <ChatButtonPlacement>
            <ChatButton>
              <img src="/icon-chat.svg" alt="chat" />
            </ChatButton>
          </ChatButtonPlacement>
        </Landing>
      </Hero>
    </>
  );
}
