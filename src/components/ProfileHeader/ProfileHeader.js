import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './ProfileHeader.style';
import {useSelector} from 'react-redux';

const ProfileHeader = ({username, uri}) => {
  const theme = useSelector(state => state.theme.defaultTheme);
  return (
    <View style={[styles.container, {borderBottomColor: theme.textColor}]}>
      <Image style={styles.image} source={{uri: uri}} />
      <View style={styles.header}>
        <Text style={[styles.text, {color: theme.textColor}]}>{username}</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
