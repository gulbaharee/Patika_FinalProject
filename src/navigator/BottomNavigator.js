import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatList from '../screens/ChatsPage/ChatList';
import Profile from '../screens/Profile/Profile';
import Contacts from '../screens/Contacts/Contacts';
import Icon from 'react-native-vector-icons/dist/Feather';
import IconAntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useSelector} from 'react-redux';
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const theme = useSelector(state => state.theme.defaultTheme);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Contacts"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="users" size={24} color={theme.textColor} />
          ),
        }}
        component={Contacts}
      />
      <Tab.Screen
        name="Chats"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <IconAntDesign name="wechat" size={24} color={theme.textColor} />
          ),
        }}
        component={ChatList}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="user" size={24} color={theme.textColor} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
