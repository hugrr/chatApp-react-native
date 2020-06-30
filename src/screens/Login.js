import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image } from 'react-native';
import { Item, Text, Button, Input } from 'native-base';
import logoChat from '../assets/logoChat.png';

export default function Login(props) {
  const { setUserName } = props;
  const [name, setName] = useState('');

  const onsubmit = () => {
    setUserName(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Image source={logoChat} resizeMode="contain" style={styles.logo} />
      </View>

      <Item>
        <Input
          placeholder="Nombre de usuario"
          style={{ color: '#fff' }}
          placeholderTextColor="grey"
          value={name}
          onChange={e => setName(e.nativeEvent.text)}
        />
      </Item>
      <Button style={styles.btnLogin} onPress={onsubmit}>
        <Text>Entrar</Text>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  container: {
    marginHorizontal: 50,
    marginVertical: 100,
  },
  btnLogin: {
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: '#0098d3',
  },
});
