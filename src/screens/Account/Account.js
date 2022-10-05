import React,{useState} from 'react';
import {View, Text} from 'react-native';
import styles from './Account.style';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import InfoBox from '../../components/InfoBoxs/InfoBox';
import Button from '../../components/Button/Button';
import {useSelector, useDispatch} from 'react-redux';
import {app} from '../../utils/firebase';
import {getFirestore, updateDoc, doc} from 'firebase/firestore';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const Account = () => {
  const [image, setImage] = useState(null);
  const activeUser = useSelector(state => state.activeUser.loggedUser);
  const theme = useSelector(state => state.theme.defaultTheme);

  const db = getFirestore(app);
  const auth = getAuth(app);

  const update = () => {
    if (password === passwordCheck) {
      signInWithEmailAndPassword(auth, email, password)
        .then(async res => {
          await updateDoc(doc(db, 'users', res.user.uid), {
            username: username,
          });
        })
        .catch(error => console.log(error));
    }
  };

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
    
  // };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <ProfilePhoto/>
      <InfoBox
        placeholder={activeUser.username}
        onChangeText={text => (username = text)}
      />
      <InfoBox
        placeholder={activeUser.email}
        onChangeText={text => (email = text)}
      />
      <InfoBox
        placeholder="password"
        onChangeText={text => (password = text)}
        password={true}
      />
      <InfoBox
        placeholder="password again"
        onChangeText={text => (passwordCheck = text)}
        password={true}
      />
      <Button placeholder="Save" onPress={update} />
    </View>
  );
};

export default Account;
