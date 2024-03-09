import "@/styles/globals.css";
import { Cabin } from "next/font/google";
import type { AppProps } from "next/app";
import styled from "styled-components";

const cabin = Cabin({ subsets: ["latin"] });

//Styling the main container just to keep it in the center, obviously not a real-world implementation
const MainContainer = styled.div`
  font-family: ${cabin.style.fontFamily};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}
