import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';
import Chat from '../../components/Chats/Chat';
import {useNavigation} from '@react-navigation/native';

const ChatList = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <Header title="Chats" />
      <Chat username="Sena Kilinç" message="test1" date="10.03" onPress={()=>navigate('ChatDetail')}/>
    </View>
  );
};

export default ChatList;
