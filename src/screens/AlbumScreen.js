import React, { useContext } from "react";

import AlbumList from "../component/AlbumList";
import albumData from "../json/album.json";
import { ThemeContext } from "../component/ThemeContext";

import { useNavigation } from "@react-navigation/native";
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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
const data = [
  {
    name: "收入",
    population: 10080,
    color: '#3D97D8',
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "支出",
    population: 5000,
    color: '#D8D23D',
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];
const AlbumScreen = (album) => {
  const { backgroundDark } = useContext(ThemeContext);
  const { navigate } = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: backgroundDark ? 'black' : 'white' }}>
      <PieChart
      data={data}
      width={350}
      height={220}
      chartConfig={{backgroundColor: backgroundDark ? 'black' : 'white' ,
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,}}
      accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute="True"
      
      />
      
        <Box margin={10} display="flex" flexDirection="row">
          <Button w="50%"   bgColor="#D8D23D" display="flex"
            onPress={() => {
            navigate('首頁', album);
            }}  
          >
            <ButtonText>支出</ButtonText>
          </Button>
          <Button w="50%"   bgColor="#3D97D8"display="flex"
            onPress={() => {
              navigate('收入');
            }}  
          >
            <ButtonText>收入</ButtonText>
          </Button>
        </Box>
      <Box style={{ backgroundColor: backgroundDark ? 'black' : 'white' }}  marginBottom={20}>
      <AlbumList list={albumData.albumList} />
      </Box>
      </ScrollView>
   
  );
};

export default AlbumScreen;