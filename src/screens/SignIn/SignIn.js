import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../components/TextInput/TextInput';
import styles from './SignIn.style';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {app} from '../../utils/firebase';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import { useSelector,useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import BottomNavigator from '../../navigator/BottomNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signIn} from '../../store/authSlice';

const SignIn = () => {
  //navigate function
  const {navigate} = useNavigation();

  //create state for user datas with redux-toolkit
  const activeUser = useSelector(state=>state.activeUser.loggedUser);
  const theme = useSelector(state=>state.theme.defaultTheme);
  const auth = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  //firestore configuration
  const db = getFirestore(app);

  //firebase authentication
  const authFirebase = getAuth(app);
  const login = () => {
    signInWithEmailAndPassword(authFirebase, email, password)
      .then(async res => {
        //get user data from firestore
        const userRef = await getDoc(doc(db, 'users', res.user.uid));
        if (userRef.exists()) {
          //add user data to redux
          dispatch(setUser({activeUser:userRef.data()}));
          dispatch(signIn());
          storeData(userRef.data());
          navigate('Home');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
 
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('activeUser', jsonValue)
    } catch (e) {
      
    }
  }

  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
      <View style={styles.innerContainer}>
        <Input placeholder="email" onChangeText={text => (email = text)} />
        <Input
          placeholder="password"
          onChangeText={text => (password = text)}
          password={true}
        />
        <Button placeholder="Sign In" onPress={login} />
        <Button placeholder="Do not have an account?" onPress={() => navigate('SignUp')} />
      </View>
    </View>
  );
};

export default SignIn;
