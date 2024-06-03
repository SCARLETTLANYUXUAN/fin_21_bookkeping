import React from "react";
import {
  Box,
  Pressable,
  Text,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetContent,
} from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

const AddCardButton = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const { navigate } = useNavigation();

  const handleClose = () => setShowActionsheet(!showActionsheet);
  const handleNavigateToAddCard = () => {
    navigate('AddCard'); // 导航到添加金融卡页面
    handleClose(); // 关闭操作表单
  };

  return (
    <Box>
      <Pressable
        onPress={handleClose}
        bg="$primary500"
        width="$10"
        height="$10"
        hardShadow="5"
        borderRadius="$full"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="white" size="3xl">
          +
        </Text>
      </Pressable>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="$72" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleNavigateToAddCard}>
            <ActionsheetItemText>添加金融卡</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};

export default AddCardButton;
