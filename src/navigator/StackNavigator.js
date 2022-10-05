import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import Home from '../screens/Home';
import Account from '../screens/Account/Account';
import Theme from '../screens/Theme/Theme';
import {useSelector, useDispatch} from 'react-redux';
import ChatDetail from '../screens/ChatDetail/ChatDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signIn, signOut} from '../store/authSlice';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const theme = useSelector(state => state.theme.defaultTheme);
  const auth = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const checkAuth = async () => {
    const authentication = await AsyncStorage.getItem('activeUser');
    console.log(authentication);
    if (authentication != null) {
      dispatch(signIn());
    }else{
      dispatch(signOut());
    }
  };

  useEffect(() => {checkAuth()},[]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!auth ? (
          <>
            <Stack.Screen
              name="SignIn"
              options={{headerShown: false}}
              component={SignIn}
            />
            <Stack.Screen
              name="SignUp"
              options={{headerShown: false}}
              component={SignUp}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              options={{headerShown: false}}
              component={Home}
            />
            <Stack.Screen
              name="Theme"
              options={{
                headerStyle: {backgroundColor: theme.headerColor},
                headerTintColor: theme.textColor,
              }}
              component={Theme}
            />
            <Stack.Screen
              name="Account"
              options={{
                headerStyle: {backgroundColor: theme.headerColor},
                headerTintColor: theme.textColor,
              }}
              component={Account}
            />
            <Stack.Screen
              name="ChatDetail"
              options={{
                headerStyle: {backgroundColor: theme.headerColor},
                headerTintColor: theme.textColor,
              }}
              component={ChatDetail}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
