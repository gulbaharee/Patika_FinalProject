import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from "../screens/ChatPage/Chat";
import Profile from "../screens/Profile/Profile";
import Contacts from "../screens/Contacts/Contacts";

const Tab = createBottomTabNavigator();

const BottomNavigator=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Contacts" component={Contacts}/>
            <Tab.Screen name="Chat" component={Chat}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}

export default BottomNavigator;

