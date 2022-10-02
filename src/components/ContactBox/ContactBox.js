import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './ContactBox.style';
import { useSelector } from 'react-redux';

const ContactBox = ({username, info,onPress}) => {
  const theme = useSelector(state=>state.theme.defaultTheme);

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
        <Image style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={[styles.userName,{color:theme.textColor}]}>{username}</Text>
          <Text style={[styles.info,{color:theme.textColor}]}>{info}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ContactBox;
