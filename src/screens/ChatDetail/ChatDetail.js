import React, {useEffect, useState} from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import {
  setDoc,
  doc,
  getFirestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import {app} from '../../utils/firebase';
import ChatBox from '../../components/ChatBox/ChatBox';
import Header from '../../components/Header/Header';
import {useSelector} from 'react-redux';
import styles from './ChatDetail.style';
import {useNavigation} from '@react-navigation/native';
import SendBox from '../../components/SendBox/SendBox';
import {v4 as uuidv4} from 'uuid';

const ChatDetail = ({route}) => {
  const {id, firstName, lastName, currentUser} = route.params;
  const {goBack} = useNavigation();
  const db = getFirestore(app);
  const theme = useSelector(state => state.theme.defaultTheme);

  const [messageList, setMessages] = useState({});

  const sendMessage = async () => {
    const messages = await addDoc(collection(db, 'messages'), {
      message: msg,
      sendBy: currentUser,
      date: '22.22',
    });
    
    await setDoc(doc(db, 'conversation', messages.id), {
      members: {currentUser, id},
      id: messages.id,
      recentMessage: msg,
    });
  };

  // const getMessages = async () => {
  //   const msgList = collection(db, 'conversation');
  //   const usersMsg = query(msgList, where('currentUser' || 'id', '==', currentUser));

  //   const querySnapshot = await getDocs(usersMsg);
  //   querySnapshot.forEach(doc => {
  //     console.log(doc.id, ' => ', doc.data());
  //   });
  // };

  // useEffect(() => {
  //   getMessages();
  // });

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Header
        title={firstName + ' ' + lastName}
        goBack={true}
        onPress={() => goBack('ChatList')}
      />
      <View style={styles.messageContainer}>
        <ChatBox message="dfldf" />
      </View>
      <SendBox onChangeText={text => (msg = text)} onPress={sendMessage} />
    </View>
  );
};

export default ChatDetail;
