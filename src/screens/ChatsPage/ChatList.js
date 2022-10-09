import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Header from '../../components/Header/Header';
import Chat from '../../components/Chats/Chat';
import {useNavigation} from '@react-navigation/native';
import {setChats} from '../../store/chatsSlice';
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import {app} from '../../utils/firebase';
import {useSelector, useDispatch} from 'react-redux';

const ChatList = () => {
  const {navigate} = useNavigation();

  const goChatDetail = (id, firstName, currentUser, msgID) => {
    navigate('ChatDetail', {id, firstName, currentUser, msgID});
  };
  const db = getFirestore(app);
  const chats = useSelector(state => state.chats.chatList);
  const activeUser = useSelector(state => state.activeUser.loggedUser);
  const contacts = useSelector(state => state.contacts.contactList);

  const dispatch = useDispatch();

  //this method get datas from firestore for chatlist
  const getMessageList = async () => {
    const msgList = collection(db, 'conversation');

    const querySnapshot = await getDocs(msgList);
    querySnapshot.forEach(doc => {
      if (doc.data().members.id == activeUser.id) {
        const chat = {
          contactName:
            contacts[
              contacts.findIndex(
                obj => obj.id === doc.data().members.currentUser,
              )
            ].firstName +
            ' ' +
            contacts[
              contacts.findIndex(
                obj => obj.id === doc.data().members.currentUser,
              )
            ].lastName,
          chatWith: doc.data().members.currentUser,
          msgRecent: doc.data().recentMessage,
          msgId: doc.data().id,
          date: doc.data().date,
        };
        dispatch(setChats(chat));
      }
      if (doc.data().members.currentUser == activeUser.id) {
        const chat = {
          contactName:
            contacts[
              contacts.findIndex(obj => obj.id === doc.data().members.id)
            ].firstName +
            ' ' +
            contacts[
              contacts.findIndex(obj => obj.id === doc.data().members.id)
            ].lastName,
          chatWith: doc.data().members.id,
          msgRecent: doc.data().recentMessage,
          msgId: doc.data().id,
          date: doc.data().date,
        };
        dispatch(setChats(chat));
      }
    });
  };

  useEffect(() => {
    getMessageList();
  }, []);

  const renderChats = ({item}) => {
    return (
      <Chat
        username={item.contactName}
        message={item.msgRecent}
        date={item.date}
        onPress={() =>
          goChatDetail(
            item.chatWith,
            item.contactName,
            activeUser.id,
            item.msgId,
          )
        }
      />
    );
  };

  return (
    <View>
      <Header title="Chats" />
      <FlatList data={chats} renderItem={renderChats} />
    </View>
  );
};

export default ChatList;
