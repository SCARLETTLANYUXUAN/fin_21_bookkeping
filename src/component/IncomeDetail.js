import React from "react";
import { Box, HStack, VStack, Text, Image, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const IncomeDetail = ({ income }) => {
  const { navigate } = useNavigation();
  return (
    
    <Box  marginBottom={2} borderRadius={3} shadow={2}>
      <Box padding={10} marginX={1} marginBottom={2} borderRadius={3} shadow={2} display='flex' justifyContent="space-between">
      <Box bg="#3D97D8" >
        <Pressable display='flex' flexDirection='row'
          onPress={() => navigate('細節', income)}
        >
            
            <HStack bg='#3D97D8' >
            <Box margin={2} padding={2} display="flex" flexDirection="column">
            <Text bold fontSize={30} color="#ffffff">{income.title} </Text>
            <Text>{income.date}</Text>
            <Text display="flex" justifyContent="flex-end" fontSize={30}>總額：TWD{income.price}</Text>
          </Box>
      </HStack>           
        </Pressable>
      </Box>   
    </Box>
    </Box>
  )};

export default IncomeDetail;