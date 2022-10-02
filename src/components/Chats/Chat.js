import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './Chat.style';
import { useSelector } from 'react-redux';

const Chat = ({username, message, date,onPress}) => {
  const theme = useSelector(state=>state.theme.defaultTheme);
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
        <Image style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={[styles.username,{color:theme.textColor}]}>{username}</Text>
          <Text style={[styles.message,{color:theme.textColor}]}>{message}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </Pressable>
  );
};

export default Chat;
