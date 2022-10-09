import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {
  setDoc,
  doc,
  getFirestore,
  addDoc,
  collection,
  getDocs,
} from 'firebase/firestore';
import {app} from '../../utils/firebase';
import ChatBox from '../../components/ChatBox/ChatBox';
import Header from '../../components/Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import styles from './ChatDetail.style';
import {useNavigation} from '@react-navigation/native';
import SendBox from '../../components/SendBox/SendBox';
import {setChatcontent} from '../../store/chatcontentSlice';

const ChatDetail = ({route}) => {
  const {id, firstName, currentUser, msgID} = route.params;
  const {goBack} = useNavigation();
  const db = getFirestore(app);
  const theme = useSelector(state => state.theme.defaultTheme);
  const chatContent = useSelector(state => state.chatContent.chatContentList);
  const dispatch = useDispatch();

  const sendMessage = async () => {
    let today = new Date();
    const messages = await addDoc(collection(db, 'messages'), {
      message: msg,
      sendBy: currentUser,
      date: today.getHours() + '.' + today.getMinutes(),
    });

    await setDoc(doc(db, 'conversation', messages.id), {
      members: {currentUser, id},
      id: messages.id,
      recentMessage: msg,
      date: today.getHours() + '.' + today.getMinutes(),
    });
  };

  const getMessages = async () => {
    const mssgList = await getDocs(collection(db, 'messages'));
    mssgList.forEach(doc => {
      console.log(msgID);
      if (doc.id == msgID) {
        dispatch(setChatcontent(doc.data()));
      }
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  const renderChats = ({item}) => {
    return <ChatBox message={item.message} />;
  };
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Header
        title={firstName}
        goBack={true}
        onPress={() => goBack('ChatList')}
      />
      <View style={styles.messageContainer}>
        <FlatList data={chatContent} renderItem={renderChats} />
      </View>
      <SendBox onChangeText={text => (msg = text)} onPress={sendMessage} />
    </View>
  );
};

export default ChatDetail;
