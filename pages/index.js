import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Flex, Grid } from "@chakra-ui/layout";
import { useSmallScreenDetector } from "./hooks";
import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";

export default function Home() {
  const isSmallScreen = useSmallScreenDetector();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [
    <SwiperSlide key={"0"}>
      <Flex
        flex={1}
        alignItems="center"
        justifyContent="center"
        direction="column"
        bg={"purple.600"}
      >
        Feche
      </Flex>
    </SwiperSlide>,
    <SwiperSlide key={"1"}>
      <Flex
        flex={1}
        alignItems="center"
        justifyContent="center"
        direction="column"
        bg={"purple.300"}
      >
        Sos Re
      </Flex>
    </SwiperSlide>,
    <SwiperSlide key={"2"}>
      <Flex
        flex={1}
        alignItems="center"
        justifyContent="center"
        direction="column"
        bg={"purple.100"}
      >
        Puto
      </Flex>
    </SwiperSlide>,
  ];

  return !isSmallScreen ? (
    <Grid templateColumns="repeat(3, 1fr)" h="100vh">
      <Flex
        flex={1}
        alignItems="center"
        justifyContent="center"
        direction="column"
        bg={"purple.600"}
      >
        Feche
      </Flex>
      <Flex
        flex={1}
        alignItems="center"
        justifyContent="center"
        direction="column"
        bg={"purple.300"}
      >
        Sos Re
      </Flex>
      <Flex
        flex={1}
        alignItems="center"
        justifyContent="center"
        direction="column"
        bg={"purple.100"}
      >
        Puto
      </Flex>
    </Grid>
  ) : (
    <Swiper>{slides}</Swiper>
  );
}
