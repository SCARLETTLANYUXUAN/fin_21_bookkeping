import React, { useContext } from 'react';
import { Center, Switch, HStack, Text } from '@gluestack-ui/themed';
import { ThemeContext } from '../component/ThemeContext';

const DisplaySettingScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Center
      shadow={2}
      width="90%"
      mt="$2"
      px="$2"
      py="$4"
      bg={theme === 'light' ? 'white' : 'black'}
      borderRadius={3}
      alignSelf="center"
    >
      <HStack space={8} alignItems="center">
        <Text size="lg" px="$2" color={theme === 'light' ? 'black' : 'white'}>
          Light Mode
        </Text>
        <Switch
          name="light Mode"
          size="md"
          accessibilityLabel="display-mode"
          accessibilityHint="light or dark mode"
          isChecked={theme === 'dark'}
          onToggle={toggleTheme}
        />
      </HStack>
    </Center>
  );
};

export default DisplaySettingScreen;
