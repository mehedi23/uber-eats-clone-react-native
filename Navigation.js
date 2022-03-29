import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Resturant from './screens/Resturant';
import { store } from './store/store'
import { Provider } from 'react-redux'


export default function Navigation() {
    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Provider store={store}>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
                <Stack.Screen name='Resturant' component={Resturant} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </Provider>
    </NavigationContainer>
  )
}