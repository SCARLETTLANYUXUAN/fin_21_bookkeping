import React from "react";
import { Linking } from "react-native";
import {
  Center,
  ScrollView,
  Box,
  Text,
  Heading,
  Image,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";

const DetailScreen = ({ route }) => {
  const { title, address, price, date, description } = route.params;
  return (
    <Box >
      <ScrollView>
        
        <Box bg="#fff" padding="10" margin="10"marginTop={30}>
          <Center>
            <Heading pt={10} size="2xl" color="#06170E" fontStyle="normal">
            {title}
            </Heading>
            <Heading size="3xl" color="#F95150">共計: {price}</Heading>
          </Center>
          
        </Box>
        <Box bg="#fff" padding="2" margin="2">
          <Text paddingVertical={3}>
            <Text fontStyle="normal" fontSize={20}>地址: </Text>
            {address}
          </Text>
          <Text paddingVertical={3}>
            <Text fontStyle="normal" fontSize={20}>日期: </Text>
            {date}
          </Text>
          
        </Box>
      </ScrollView>
    </Box>
  );
};

export default DetailScreen;