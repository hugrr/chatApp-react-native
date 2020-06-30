import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Input from '../components/Input.js';
import firebase from '../utils/firebase';
import 'firebase/database';
import moment from 'moment';
import { Header, Body, Title } from 'native-base';
import Message from '../components/Message';
import { map } from 'lodash';
import image from '../assets/fondo-chatapp.jpg';

export default function Chat(props) {
  const { userName } = props;
  const [messages, setMessages] = useState('');
  const chatScrollRef = useRef();

  useEffect(() => {
    const chat = firebase.database().ref('general');
    chat.on('value', snapShot => {
      setMessages(snapShot.val());
    });
  }, []);

  useEffect(() => {
    chatScrollRef.current.scrollTo({ y: 10000000000 });
  }, [messages]);

  const sendMessage = message => {
    const time = moment().format('hh:mm a');
    firebase
      .database()
      .ref('general')
      .push({
        userName,
        text: message,
        time,
      });
  };

  return (
    <>
      <Header style={styles.header} iosBarStyle="light-content">
        <Body>
          <Title>Chat App</Title>
        </Body>
      </Header>
      <View style={styles.content}>
        <ImageBackground source={image} style={styles.image}>
          <ScrollView style={styles.chatView} ref={chatScrollRef}>
            {map(messages, (message, index) => (
              <Message key={index} message={message} name={userName} />
            ))}
          </ScrollView>
        </ImageBackground>
        <Input sendMessage={sendMessage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#16202b',
  },

  content: {
    flex: 1,
    justifyContent: 'space-between',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
