import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-get-random-values';
import Principal from './pages/principal';
import {setHistory, getHistoryFull} from './Banco/RealmDB';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  // setHistory('airan', 'text');
  getHistoryFull();
  console.log(getHistoryFull);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Principal} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
