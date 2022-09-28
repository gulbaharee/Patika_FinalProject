import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../components/TextInput/TextInput';
import styles from './SignIn.style';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {app} from '../../utils/firebase';

const SignIn = () => {
  const {navigate} = useNavigation();

  const auth = getAuth(app);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log('success'))
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Input placeholder="email" onChangeText={text => (email = text)} />
        <Input
          placeholder="password"
          onChangeText={text => (password = text)}
        />
        <Button placeholder="Sign In" onPress={login}/>
        <Button placeholder="Sign Up" onPress={() => navigate('SignUp')} />
      </View>
    </View>
  );
};

export default SignIn;
