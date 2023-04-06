import {
  Box,
  Center,
  HStack,
  SimpleGrid,
  Text,
  useColorMode,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import {
  motion,
  useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Counter from "../../components/Leistungen/counter";
import FrontText from "../../components/Leistungen/frontText";
import SingleLeistung from "../../components/Leistungen/single";
import { useRef } from "react";

const Leistungen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { colorMode, toggleColorMode } = useColorMode();
  // const [ref, inView] = useInView({ threshold: 1 });
  const myRef = useRef(null)
  const theme = useTheme();

  const control = useAnimation();

  const changeSlide = (val) => {
    setCurrentSlide(val);
  };

  const arrowVariant = {
    normal: { translateY: 0 },
    hover: { translateY: "80px" },
  };
  const stickVariant = {
    normal: {
      scaleY: 1,
      translateY: 0,
      transition: { duration: 0.15, type: "tween" },
    },
    hover: {
      scaleY: 2.78,
      translateY: "50px",
      transition: { duration: 0.1, type: "tween" },
    },
  };

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} minHeight={"100vh"}>
        <Center justifyContent={"center"} alignItems={"center"}>
          <FrontText />
        </Center>
        <VStack justifyContent={"center"} alignItems={"center"}>
          <Box
            onClick={()=>myRef.current.scrollIntoView({ behavior: 'smooth', block: "center" })}
            cursor={"pointer"}
            onMouseEnter={() => control.start("hover")}
            onMouseLeave={() => control.start("normal")}
          >
            <VStack justifyContent={"center"} alignItems={"center"}>
              <Box
                id="stick"
                as={motion.div}
                initial="normal"
                animate={control}
                variants={stickVariant}
              >
                <svg
                  width="11"
                  height="56"
                  viewBox="0 0 11 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="5.5"
                    y1="2.40413e-07"
                    x2="5.5"
                    y2="56"
                    stroke={colorMode === "dark" ? "white" : "black"}
                    strokeWidth="11"
                  />
                </svg>
              </Box>
              <Box
                id="arrow"
                as={motion.div}
                initial="normal"
                animate={control}
                variants={arrowVariant}
                marginTop={"-2px!important"}
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 42L0.751293 -4.56773e-06L49.2487 -3.27948e-07L25 42Z"
                    fill={colorMode === "dark" ? "white" : "black"}
                  />
                </svg>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </SimpleGrid>
      <Counter currentSlide={currentSlide} />

      <VStack justifyContent={"center"}>
        <SingleLeistung
          myRef={myRef}
          FOR={"DIGITAL"}
          HEAD="Digitales Gebäudemodell"
          DESC={
            "Die Vorteile digitaler Gebäudemodelle: Präzision, Flexibilität und Effizienz"
          }
          TEXT={
            "Digitale Gebäudemodelle sind präzise, flexibel und effizient. Sie ermöglichen eine detaillierte dreidimensionale Darstellung des Gebäudes, die schnell und einfach angepasst werden kann. Dadurch können Fehler und Probleme frühzeitig erkannt und behoben werden, was zu sichereren und effizienteren Bauvorhaben führt."
          }
          Number={1}
          IMG="test"
          IMG_IN="in"
          currentSlide={currentSlide}
          changeSlide={changeSlide}
          color={theme.colors.one}
        />
        <SingleLeistung
          FOR={"ASSET MANAGEMENT"}
          HEAD="ESG Zertifikat"
          DESC={
            "Für Gebäude im Bestand"
          }
          TEXT={
            "ESG Zertifikate der DGNB für Gebäude im Bestand steigern den Wert Ihrer Immobilie, verbessern Ihr Image und sind ein Zeichen für Nachhaltigkeit. Die gründliche und objektive Bewertung zeigt Ihnen Stärken und Schwächen Ihrer Immobilie auf und gibt Ihnen die Möglichkeit, gezielte Maßnahmen zur Optimierung zu ergreifen. Investieren Sie in die Zukunft Ihrer Immobilien und lassen Sie sie durch die DGNB zertifizieren."
          }
          Number={2}
          IMG="test2"
          IMG_IN="in2"
          currentSlide={currentSlide}
          changeSlide={changeSlide}
          color={theme.colors.two}
        />
        <SingleLeistung
          FOR={"QUICK START"}
          HEAD="ESG Pre-Check"
          DESC={
            "ESG Pre-Check: Schneller Überblick über Nachhaltigkeitsstatus Ihrer Immobilie"
          }
          TEXT={
            "Der ESG Pre-Check bietet Ihnen einen schnellen und kosteneffektiven Weg, um den Nachhaltigkeitsstatus Ihrer Immobilie zu überprüfen und eine erste Einschätzung zu erhalten. Sie können gezielte Maßnahmen zur Verbesserung ergreifen und so den Wert und die Nachhaltigkeit Ihrer Immobilie steigern. Nutzen Sie den ESG Pre-Check, um sich von Mitbewerbern abzuheben und in eine nachhaltige Zukunft zu investieren."
          }
          Number={3}
          IMG="test3"
          IMG_IN="in3"
          currentSlide={currentSlide}
          changeSlide={changeSlide}
          color={theme.colors.three}
        />
        <SingleLeistung
          FOR={"PRÄZISSION"}
          HEAD="Digitale Bestandserfassung"
          DESC={
            "Präzise 2D-Pläne durch Lidar-Scans: Unser 2D-Planerstellungs-Service"
          }
          TEXT={
            "Unser 2D-Planerstellungs-Service auf Basis von Lidar-Scans ermöglicht es uns, hochpräzise und detaillierte Pläne Ihrer Gebäude zu erstellen. Der Scan mit unserem Lidar-Scanner erfasst die Gebäudegeometrie punktgenau und generiert ein 3D-Modell, aus dem wir Ihre präzisen 2D-Pläne erstellen. Vermeiden Sie Fehler und erhalten Sie genaue Grundlagen für Planungen, Renovierungen und Bestandsdokumentationen mit unserem Lidar-Scan-Service."
          }
          Number={4}
          IMG="test4"
          IMG_IN="in4"
          currentSlide={currentSlide}
          changeSlide={changeSlide}
          color={theme.colors.four}
        />
      </VStack>
    </>
  );
};

export default Leistungen;
