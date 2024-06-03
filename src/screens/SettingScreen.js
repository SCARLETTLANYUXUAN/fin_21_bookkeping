import React from "react";
import { Center, Button, ButtonText, Box } from "@gluestack-ui/themed";
import ListItem from "../component/ListItem";
import { useDispatch } from "react-redux";
import { logout } from "../redux/accountSlice"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const SettingsScreen = () => {
  const dispatch = useDispatch();
  return (
    <Box mt="$1" borderBottomWidth="$1" borderColor="lightgray">
      <ListItem  title="顯示設定" destination="DisplaySetting" />
      <ListItem title="帳號設定" destination="AccountSetting" />
      <Center>
        <Button w="90%" mt="$10" size="lg" bgColor="#ff1100"
          onPress={() => {
            dispatch(logout());
          }}  
        >
          <ButtonText>登出</ButtonText>
        </Button>        
      </Center>

    </Box>
  );
};

export default SettingsScreen;