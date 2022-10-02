import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import Home from '../screens/Home';
import Account from '../screens/Account/Account';
import Theme from '../screens/Theme/Theme';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='SignIn' options={{headerShown:false}} component={SignIn} />
        <Stack.Screen name='SignUp' options={{headerShown:false}} component={SignUp} />
        <Stack.Screen name='Home' options={{headerShown:false}} component={Home}/>
        <Stack.Screen name='Theme'  component={Theme}/>
        <Stack.Screen name='Account'  component={Account}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;