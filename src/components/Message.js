import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import letterCoors from '../utils/letterColors';
import letterColors from '../utils/letterColors';

export default function Message(props) {
  const { message, name } = props;
  const { userName, text, time } = message;
  const [bgColorLetter, SetBgColorLetter] = useState(null);
  const thisIsMe = name === userName ? true : false;

  // buscar que hace trim()
  useEffect(() => {
    const char = userName.trim()[0].toUpperCase();
    const indexLetter = char.charCodeAt() - 65;
    SetBgColorLetter(letterColors[indexLetter]);
  }, []);

  const conditionalStyle = {
    container: {
      justifyContent: thisIsMe ? 'flex-end' : 'flex-start',
    },
    ViewMessage: {
      backgroundColor: thisIsMe ? '#f1f1f1' : '#4b86f0',
    },
    message: {
      color: thisIsMe ? '#000' : '#fff',
      textAlign: thisIsMe ? 'right' : 'left',
    },
  };

  return (
    <View style={[styles.container, conditionalStyle.container]}>
      {!thisIsMe && (
        <View
          style={[
            styles.letterView,
            { backgroundColor: `rgb(${bgColorLetter})` },
          ]}>
          <Text style={styles.letter}> {userName.substr(0, 1)}</Text>
        </View>
      )}

      <View style={[styles.ViewMessage, conditionalStyle.ViewMessage]}>
        <Text style={[styles.message, conditionalStyle.message]}>{text}</Text>
        <Text
          style={[styles.time, thisIsMe ? styles.timeLeft : styles.timeRight]}>
          {time}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  letterView: {
    height: 35,
    width: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#f00',
  },
  letter: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
  },
  ViewMessage: {
    borderRadius: 10,
    minHeight: 35,
    minWidth: '40%',
    maxWidth: '80%',
  },
  message: {
    padding: 5,
    paddingBottom: 25,
  },
  time: {
    fontSize: 10,
    position: 'absolute',
    bottom: 5,
  },
  timeRight: {
    right: 8,
    color: '#fff',
  },
  timeLeft: {
    left: 8,
    color: 'grey',
  },
});
