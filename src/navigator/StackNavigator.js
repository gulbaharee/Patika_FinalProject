import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import Home from '../screens/Home';
import Account from '../screens/Account/Account';
import Theme from '../screens/Theme/Theme';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const theme = useSelector(state=>state.theme.defaultTheme);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='SignIn' options={{headerShown:false}} component={SignIn} />
        <Stack.Screen name='SignUp' options={{headerShown:false}} component={SignUp} />
        <Stack.Screen name='Home' options={{headerShown:false}} component={Home}/>
        <Stack.Screen name='Theme' options={{headerStyle:{backgroundColor:theme.headerColor},headerTintColor:theme.textColor}} component={Theme}/>
        <Stack.Screen name='Account' options={{headerStyle:{backgroundColor:theme.headerColor},headerTintColor:theme.textColor}} component={Account}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;