import React from "react";

import IncomeList from "../component/IncomeList";
import incomeData from "../json/income.json";
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
const IncomeScreen = (income) => {
  const { navigate } = useNavigation();
  return (
    <ScrollView >
      <PieChart
      data={data}
      width={350}
      height={220}
      chartConfig={{backgroundColor: '#fff',
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,}}
      accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute="True"
      
      />
      
        <Box margin={10} display="flex" flexDirection="row">
          <Button w="50%"   action="secondary"display="flex"
            onPress={() => {
            navigate('首頁');
            }}  
          >
            <ButtonText>支出</ButtonText>
          </Button>
          <Button w="50%"   action="primary"display="flex"
            onPress={() => {
              navigate('收入', income);
            }}  
          >
            <ButtonText>收入</ButtonText>
          </Button>
        </Box>
      <Box backgroundColor="#ffffff"  marginBottom={20}>
      <IncomeList list={incomeData.incomeList} />
      </Box>
      </ScrollView>
   
  );
};

export default IncomeScreen;