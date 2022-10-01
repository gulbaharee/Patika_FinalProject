import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from "../screens/ChatPage/Chat";
import Profile from "../screens/Profile/Profile";
import Contacts from "../screens/Contacts/Contacts";

const Tab = createBottomTabNavigator();

const BottomNavigator=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Contacts" options={{headerShown:false}} component={Contacts}/>
            <Tab.Screen name="Chat" options={{headerShown:false}} component={Chat}/>
            <Tab.Screen name="Profile" options={{headerShown:false}} component={Profile}/>
        </Tab.Navigator>
    )
}

export default BottomNavigator;

