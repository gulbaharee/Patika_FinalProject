import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatList from "../screens/ChatsPage/ChatList";
import Profile from "../screens/Profile/Profile";
import Contacts from "../screens/Contacts/Contacts";

const Tab = createBottomTabNavigator();

const BottomNavigator=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Contacts" options={{headerShown:false}} component={Contacts}/>
            <Tab.Screen name="ChatList" options={{headerShown:false}} component={ChatList}/>
            <Tab.Screen name="Profile" options={{headerShown:false}} component={Profile}/>
        </Tab.Navigator>
    )
}

export default BottomNavigator;

