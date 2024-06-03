import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const AddCardScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const { navigate } = useNavigation(); // 将 useNavigation 放在组件内部

  const handleAddCard = () => {
    // 在这里处理添加金融卡的逻辑，可以将卡片信息发送到后端进行保存等操作
    console.log('Adding card:', { cardNumber, expiryDate, cvv });

    // 清空输入框
    setCardNumber('');
    setExpiryDate('');
    setCVV('');

    // 导航到其他屏幕
    navigate('OtherScreen');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="卡号"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="有效期"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCVV}
        secureTextEntry
      />
      <Button title="添加卡片" onPress={handleAddCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddCardScreen;
