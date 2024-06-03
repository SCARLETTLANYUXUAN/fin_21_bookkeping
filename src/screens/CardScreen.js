// CardScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Card from '../component/Card';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
const CardScreen = () => {
  const navigation = useNavigation();

  const handlePressAddCard = () => {
    navigation.navigate('AddCard'); 
  };
  return (
    <SafeAreaProvider>
    <ScrollView style={styles.container}>
      <Text style={styles.header}>金融卡設定</Text>
      <Card cardType="金融卡1" lastDigits="8888" logo="credit-card-outline"/>
      <Card cardType="金融卡2" lastDigits="8888" logo="credit-card-outline"/>
      <TouchableOpacity style={styles.addCard}onPress={handlePressAddCard}>
        <Icon name="add" color="#000" size={50}/>
        <Text style={styles.addText}>添加金融卡</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  addCard: {
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
});

export default CardScreen;
