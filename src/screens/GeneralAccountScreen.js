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
  import { setGeneralAccountInfo } from "../redux/accountSlice";
  import { selectGeneral } from "../redux/accountSlice";
  import { useDispatch, useSelector } from "react-redux";
  
  const GeneralAccountScreen = () => {
    const general = useSelector(selectGeneral);
    const dispatch = useDispatch();
    const [name, setName] = useState(general.name);
    const [nameIsError, setNameIsError] = useState(true);
    const [email, setEmail] = useState(general.email);
    const [emailIsError, setEmailIsError] = useState(true);
    const [adrs, setAdrs] = useState(general.adrs);
    const [tel, setTel] = useState(general.tel);
  
  
    const nameRegex = /^[a-zA-Z]+\w*$/;
    const emailRegex = /\w{3,}@[a-zA-Z_]+\.[a-zA-Z]{2,5}/;
  
  
    useEffect(() => {
      if (!nameIsError && !emailIsError)
         dispatch(setGeneralAccountInfo({ name, email, adrs, tel }))
  
      if (email.match(emailRegex)) setEmailIsError(false)
      else setEmailIsError(true);
  
      if (name.match(nameRegex)) setNameIsError(false)
      else setNameIsError(true);
   }, [name, email, adrs, tel]);
  
    return (
      <VStack space={2} mt={5} width="80%" alignSelf="center">
        
        <FormControl mb={5} isRequired>
          <FormControlLabel>
            <FormControlLabelText>姓名</FormControlLabelText>
          </FormControlLabel>
          <Input variant="underlined">
            <InputField
              placeholder="姓名"
              value={name}
              onChangeText={(text) => {
                setName(text);
                if (nameRegex.test(text)) setNameIsError(false);
                else setNameIsError(true);
              }}
            />
          </Input>
          <FormControlError isInvalid={nameIsError}>
            <FormControlErrorIcon as={AlertCircleIcon} />
          </FormControlError>
        </FormControl>
        <FormControl mb={5} isRequired>
          <FormControlLabel>
            <FormControlLabelText>電子郵件</FormControlLabelText>
          </FormControlLabel>
          <Input variant="underlined">
            <InputField
              placeholder="例：adc@gamil.com"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (emailRegex.test(text)) setEmailIsError(false);
                else setEmailIsError(true);
              }}
            />
          </Input>
          <FormControlError isInvalid={emailIsError}>
            <FormControlErrorIcon as={AlertCircleIcon} />
          </FormControlError>
        </FormControl>
        <FormControl mb={5}>
          <FormControlLabel>
            <FormControlLabelText>電話</FormControlLabelText>
          </FormControlLabel>
          <Input variant="underlined">
            <InputField
              placeholder="例:09XXXXXXXX"
              value={tel}
              onChangeText={(text) => setTel(text)}
            />
          </Input>
        </FormControl>
      </VStack>
    );
  };
  
  export default GeneralAccountScreen;