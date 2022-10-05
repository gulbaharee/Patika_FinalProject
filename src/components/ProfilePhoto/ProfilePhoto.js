import React from 'react';
import {Image, View, Pressable} from 'react-native';
import styles from './ProfilePhoto.style';

const ProfilePhoto = ({url,onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Image style={styles.image} source={{uri: url}} />
      </Pressable>
    </View>
  );
};

export default ProfilePhoto;
