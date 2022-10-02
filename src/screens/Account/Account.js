import React from 'react';
import {View, Text} from 'react-native';
import styles from './Account.style';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import InfoBox from '../../components/InfoBoxs/InfoBox';
import Button from '../../components/Button/Button';
import { useSelector,useDispatch } from 'react-redux';
import {app} from '../../utils/firebase';
import {getFirestore,updateDoc,doc} from 'firebase/firestore';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';

const Account = () => {

  const activeUser = useSelector(state => state.activeUser.loggedUser);
  const theme = useSelector(state => state.theme.defaultTheme);

  const db = getFirestore(app);
  const auth = getAuth(app);

  const update =()=>{
    if(password===passwordCheck){
      signInWithEmailAndPassword(auth,email,password)
      .then(async res => {
        await updateDoc(doc(db,'users',res.user.uid),{
          username:username,
        })
      })
      .catch(error=>console.log(error));
    }
  };

  return (
    <View style={styles.container}>
      <ProfilePhoto />
      <InfoBox placeholder={activeUser.username} onChangeText={text => (username = text)} />
      <InfoBox placeholder={activeUser.email} onChangeText={text => (email = text)} />
      <InfoBox placeholder='password' onChangeText={text => (password = text)} password={true}/>
      <InfoBox placeholder='password again' onChangeText={text => (passwordCheck = text)} password={true}/>
      <Button placeholder='Save' onPress={update}/>
    </View>
  );
};

export default Account;
