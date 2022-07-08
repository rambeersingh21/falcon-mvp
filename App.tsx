import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View,Text } from './components/Themed';
import {  LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import SignIn from './src/components/AuthScreen/SignIn';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs(['Warning:...']);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}><SignIn/></Provider>
        {/* <Navigation colorScheme={colorScheme} />
        <StatusBar /> */}
        
      </SafeAreaProvider>
    );
  }
}
