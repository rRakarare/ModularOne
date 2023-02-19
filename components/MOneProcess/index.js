import { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import styles from "./styles.module.css";
import styled from "styled-components";

const ParallaxContainer = styled(Parallax)`
  position: relative !important;
  height: 500px !important;
  & > div > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SlopeBegin = styled.div`
  background-color: #263238;
  clip-path: polygon(20% 0, 70% 0, 50% 100%, 0% 100%);
  position: absolute;
  width: 170%;
  height: 500px;
  cursor: pointer;
`;

const SlopeEnd = styled.div`
  clip-path: polygon(70% 0, 100% 0, 80% 100%, 50% 100%);
  background: ${(props) =>
    `linear-gradient(to right, #7a7a7a 20%, ${props.gradient} 100%)`};
  position: absolute;
  width: 170%;
  height: 500px;
  cursor: pointer;
`;

const TextNumber = styled(ParallaxLayer)`
  display: flex;
  align-items: center !important;
  pointer-events: none;
  justify-content: start !important;
  font-family: "Kanit", sans-serif;
`;

const Span = styled.span`
  font-size: 280px;
  color: #a2a2a2;
`;

const HeadSpan = styled.div`
  font-size: 60px;
  color: #ffffff;
  text-transform: uppercase;
  line-height: normal;
`;
const LowSpan = styled.div`
  font-size: 20px;
  color: #ffffff;
  line-height: normal;
`;

const Stripe = styled.div`
  margin: 5px 0 15px 0;
  height: 10px;
  background: ${(props) =>
    `linear-gradient(to right, #7a7a7a 20%, ${props.gradient} 100%)`};
`;
const Numwrap = styled.div`
  position: relative;
`;

const Wrap = styled.div`
  margin-left: 40px;
`;

const Page = ({ offset, gradient, onClick, headline, lowline }) => {
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <SlopeBegin />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <SlopeEnd gradient={gradient} />
      </ParallaxLayer>

      <TextNumber offset={offset} speed={0.3}>
        
          <Span>0{offset + 1}</Span>
        

        <Wrap>
          <HeadSpan>{headline}</HeadSpan>
          <Stripe gradient={gradient} />
          <LowSpan>{lowline}</LowSpan>
        </Wrap>
      </TextNumber>
    </>
  );
};

export default function MOneProcess() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <ParallaxContainer ref={parallax} pages={4} horizontal enabled={true} >
      <Page
        offset={0}
        gradient="#f7d147"
        onClick={() => scroll(1)}
        headline={"Modellierung"}
        lowline={
          "M1 baut Gebäudemodelle nach standardisierten Modellierungsrichtlinien auf und strukturiert diese intelligent"
        }
      />
      <Page
        offset={1}
        gradient="#f75b47"
        onClick={() => scroll(2)}
        headline={"Attribuierung"}
        lowline={
          "Die von M1 entwickelten Attribuierungsrichtlinien gewährleisten einen einheitlichen und klar definierten Prozess"
        }
      />
      <Page
        offset={2}
        gradient="#6747f7"
        onClick={() => scroll(3)}
        headline={"Automatisierung"}
        lowline={
          "M1 entwickelt Automatisierungen und Simulationen als Aufsatz für digitale Gebäudemodelle"
        }
      />
      <Page
        offset={3}
        gradient="#439a53"
        onClick={() => scroll(0)}
        headline={"Ökosystem"}
        lowline={
          "M1 formt gemeinsam mit starken Partnern aus dem Bausegment ein Ökosystem"
        }
      />
    </ParallaxContainer>
  );
}
