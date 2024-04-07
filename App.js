import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Screens/HomeScreen';
import ProfilePage from './Screens/ProfilePage';
import { useNavigation } from '@react-navigation/native';
import Chatbot from './Screens/Chatbot';
import PolicyDescPage from './Screens/PolicyDescPage';
import AudioNav from './Screens/AudioNav';
import FormPage from './Screens/FormPage';
import FilteredSchesmes from './Screens/FilteredSchesmes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Chat" component={Chatbot} />
        <Stack.Screen name="PolicyPage" component={PolicyDescPage} />
        <Stack.Screen name="AudioNav" component={AudioNav} />
        <Stack.Screen name="Forms" component={FormPage} />
        <Stack.Screen name="FilteredSchemes" component={FilteredSchesmes} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

