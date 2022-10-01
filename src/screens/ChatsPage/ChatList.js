import React from "react";
import {View,Text} from 'react-native';
import Header from '../../components/Header/Header';
import Chat from "../../components/Chats/Chat";

const ChatList=()=>{
    return(
        <View>
            <Header title="Chats"/>
            <Chat username="Sena Kilinç" message="test1" date="10.03" />
        </View>
    )
}

export default ChatList;