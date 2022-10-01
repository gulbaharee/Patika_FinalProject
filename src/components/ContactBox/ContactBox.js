import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './ContactBox.style';

const ContactBox = ({username, info,onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.userName}>{username}</Text>
          <Text style={styles.info}>{info}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ContactBox;