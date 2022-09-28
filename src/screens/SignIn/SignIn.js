import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../components/TextInput/TextInput';
import styles from './SignIn.style';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Input placeholder="username" />
      </View>
    </View>
  );
};

export default SignIn;
