import React from "react";
import { Platform } from "react-native";
import { useSelector } from "react-redux";
import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AlbumScreen from "../screens/AlbumScreen";
import DetailScreen from "../screens/DetailScreen";
import SettingsScreen from "../screens/SettingScreen";
import DisplaySettingScreen from "../screens/DisplaySettingScreen";
import AccountSettingScreen from "../screens/AccountSettingScreen";
import LoginScreen from "../screens/LoginScreen";
import IncomeScreen from "../screens/IncomeScreen";
import CardScreen from "../screens/CardScreen";
import AddCardScreen from "../screens/AddCardScreen"; 
import NullScreen from "../screens/NullScreen";

import { selectHasLogin } from "../redux/accountSlice";

import ActionButton from "../component/ActionButton";

import MyTheme from "../../theme";

import albumData from "../json/album.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const hasLogin = useSelector(selectHasLogin);
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      flex={1}
    >
      {!hasLogin ? (
        <LoginScreen />
      ) : (
        <NavigationContainer theme={MyTheme}>
          <MyTabs />
        </NavigationContainer>
      )}
    </KeyboardAvoidingView>
  );
};

const MyTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: colors.light500,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          paddingBottom: Platform.OS === "ios" ? 30 : 5,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "首頁",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CardStack" // 将 "AddCard" 更改为 "Card"
        component={CardStack} // 使用 CardScreen 组件代替 AddCardScreen
        options={{
        headerShown: false,
        title: "金融卡",
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="credit-card" color={color} size={26} />
    ),
  }}
/>
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "設定",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const CardStack = ({ navigation }) => {
  return (
    <Stack.Navigator headerBackTitleStyle={{ color: "black" }}>
      <Stack.Screen
        name="Card"
        component={CardScreen}
        options={{
          title: "金融卡",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCardScreen}
        options={{
          title: "添加金融卡",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsStack = ({ navigation }) => {
  return (
    <Stack.Navigator headerBackTitleStyle={{ color: "black" }}>
      <Stack.Screen
      
        name="Settings"
        component={SettingsScreen}
        MaterialCommunityIcons={{
          name:"cog-outline",
        }}
        options={{
          title: "設定",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "Display",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="AccountSetting"
        component={AccountSettingScreen}
        options={{
          
          title: "賬號設定",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="首頁"
        component={AlbumScreen}
        options={{
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="收入"
        
        component={IncomeScreen}
        options={{
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="細節"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
