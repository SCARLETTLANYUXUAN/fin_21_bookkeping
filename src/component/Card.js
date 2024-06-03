// CardComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Card = ({ cardType, lastDigits, logo }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.cardType}>{cardType}</Text>
        <Text style={styles.cardNumber}>XXXX XXXX XXXX {lastDigits}</Text>
        {logo && <Icon name={logo} type="material-community" color="#fff" size={30} containerStyle={styles.logo}/>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#2D2A6E',
    borderRadius: 10,
    padding: 20,
    height: 150,
    justifyContent: 'space-between',
  },
  cardType: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 18,
  },
  logo: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default Card;
