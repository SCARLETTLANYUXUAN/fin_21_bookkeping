import React,{ useContext }  from "react";
import { Provider } from "react-redux";
import { ThemeProvider, ThemeContext } from'./src/component/ThemeContext'
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Navigation from "./src/navigation";
import { store } from "./src/redux/store";

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <GluestackUIProvider config={config}>
            <AppContent />
          </GluestackUIProvider>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
};
const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, theme === 'light' ? styles.light : styles.dark]}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  light: {
    backgroundColor: 'white',
  },
  dark: {
    backgroundColor: 'black',
  },
});
export default App;