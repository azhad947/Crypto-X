import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src="https://cdn.discordapp.com/attachments/1021189063262351390/1065626302457065472/newbits_robot_torso_with_humanoid_head_and_face_facing_forward__e71460da-1b20-4a00-99f2-16b3fee6575a.png"
          // filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"1"}
      >
        Xcrypto
      </Text>
    </Box>
  );
};

export default Home;