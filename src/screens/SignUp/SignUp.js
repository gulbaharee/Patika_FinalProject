import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './SignUp.style';
import Input from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {app} from '../../utils/firebase';
import {getFirestore, setDoc, doc} from 'firebase/firestore';
import {async} from '@firebase/util';
import {useSelector} from 'react-redux';

const SignUp = () => {
  const theme = useSelector(state => state.theme.defaultTheme);

  //navigate function
  const {navigate} = useNavigation();

  const db = getFirestore(app);
  const auth = getAuth(app);

  const SignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async res => {
        await setDoc(doc(db, 'users', res.user.uid), {
          email: email,
          username: username,
          id: res.user.uid,
          firstName: firstName,
          lastName: lastName,
        });
        navigate('SignIn');
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={styles.innerContainer}>
        <Input placeholder="email" onChangeText={text => (email = text)} />
        <Input
          placeholder="username"
          onChangeText={text => (username = text)}
        />
        <Input placeholder="Name" onChangeText={text => (firstName = text)} />
        <Input
          placeholder="Last Name"
          onChangeText={text => (lastName = text)}
        />
        <Input
          placeholder="password"
          onChangeText={text => (password = text)}
        />
        <Button placeholder="Sign Up" onPress={SignUp} />
        <Button
          placeholder="Already have an account?"
          onPress={() => navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default SignUp;
