
import {
   FormControl,
   FormControlError,
   FormControlErrorText,
   FormControlErrorIcon,
   FormControlLabel,
   FormControlLabelText,
   AlertCircleIcon,
   VStack,
   Text,
   Input,
   InputField,
   KeyboardAvoidingView,
 } from "@gluestack-ui/themed";
 import React, { useState, useEffect } from "react";
 import { setAdvancedAccountInfo } from "../redux/accountSlice";
 import { selectAdvanced } from "../redux/accountSlice";
 import { useDispatch, useSelector } from "react-redux";
const AdvancedAccountScreen = () => {
   const advanced = useSelector(selectAdvanced );
    
    
    const [password, setPassWord] = useState(advanced.password);
  
  
    
  
  
    
  
    return (
      <VStack space={2} mt={5} width="80%" alignSelf="center">
        
        <FormControl mb={5}>
          <FormControlLabel>
            <FormControlLabelText>修改密碼</FormControlLabelText>
          </FormControlLabel>
          <Input variant="underlined">
            <InputField
              placeholder="至少8位數密碼，含最少一位大小寫字英文字母"
              value={password}
              onChangeText={(text) => setPassWord(text)}
            />
          </Input>
        </FormControl>
        
      </VStack>
    );
}

export default AdvancedAccountScreen;