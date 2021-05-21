import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import 'react-native-get-random-values';

import Principal from './pages/principal';
import TextReader from './pages/textReader';
import About from './pages/about';

const Stack = createStackNavigator();

export function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Principal} />
      <Stack.Screen name="TextReader" component={TextReader} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{drawerLabel: 'Home'}}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerLabel: 'Sobre o app',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
