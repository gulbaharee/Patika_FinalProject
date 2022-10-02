import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './ProfileHeader.style';

const ProfileHeader = ({username,onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Image style={styles.image} />
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.text}>{username}</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
