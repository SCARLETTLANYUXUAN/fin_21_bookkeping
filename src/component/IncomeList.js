import React from "react";
import { FlatList,ScrollView } from "react-native";
import IncomeDetail from "./IncomeDetail";

const IncomeList = ({ list }) => { 
  const renderItem = ({ item }) => <IncomeDetail income={item} />;
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default IncomeList;
