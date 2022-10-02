import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './ProfileHeader.style';
import { useSelector } from 'react-redux';

const ProfileHeader = ({username,onPress}) => {

  const theme = useSelector(state=>state.theme.defaultTheme);
  return (
    <View style={[styles.container,{borderBottomColor:theme.textColor}]}>
      <Pressable onPress={onPress}>
        <Image style={styles.image} />
      </Pressable>
      <View style={styles.header}>
        <Text style={[styles.text,{color:theme.textColor}]}>{username}</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
