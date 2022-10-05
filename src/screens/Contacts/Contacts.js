import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';
import ContactBox from '../../components/ContactBox/ContactBox';
import {useSelector} from 'react-redux';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import {app} from '../../utils/firebase';
import {useNavigation} from '@react-navigation/native';

const Contacts = () => {
  const theme = useSelector(state => state.theme.defaultTheme);
  const {navigate} = useNavigation();
  //firestore configuration
  const db = getFirestore(app);

  //   useEffect(() => {
  //     getContacts();
  //   }, []);

  //   const getContacts =()=>{
  //     const contacts =  getDoc(doc(db,'contacts'));
  //     console.log(contacts);
  //   }

  return (
    <View>
      <Header title="Contacts" />
      <ContactBox
        username="Sena Sila Kilinç"
        info="son görülme 1 saat önce"
        onPress={() => navigate('ChatDetail')}
      />
    </View>
  );
  
};

export default Contacts;
