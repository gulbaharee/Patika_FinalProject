import React from 'react';
import {Image, View} from 'react-native';
import styles from './ProfilePhoto.style';

const ProfilePhoto = ({url}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:url}}/>
    </View>
  );
};

export default ProfilePhoto;