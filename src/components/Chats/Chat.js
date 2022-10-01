import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './Chat.style';

const Chat = ({username, message, date,onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </Pressable>
  );
};

export default Chat;
