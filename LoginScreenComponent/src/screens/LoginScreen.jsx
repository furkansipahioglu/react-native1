import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Alert,
} from 'react-native';

const LoginScreen = ({route, navigation}) => {
  const [mail, setMail] = useState('');
  const [password2, setPassword] = useState('');
  const [ismailTrue, setMailTrue] = useState(false);
  const [isPaswordTrue, setPwTrue] = useState(false);
  const [isEmpty1, setisEmpty1] = useState(false);
  const [isEmpty2, setisEmpty2] = useState(false);


  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert',
      `
  ${
    mail === '' && password2 === ''
      ? 'mail adresi ve şifre girmediniz'
      : mail === ''
      ? 'mail adresi girmediniz'
      : 'şifre girmediniz'
  }
  `,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    );
  const handeLogin = () => {
    if (mail === '' || password2 === '') {
      createTwoButtonAlert();
    } else {
      if (password_validate(password2) && handleInput(mail)) {
        navigation.navigate('Welcome', [{name: mail}, {password: password2}]);
      } else {
      }
    }
  };

  function password_validate(password) {
    let re = {
      capital: /[A-Z]/,
      digit: /[0-9]/,
      except: /[öüiğ]/,
      full: /[A-Za-z0-9]{7,13}$/,
    };
    if (
      re.capital.test(password) &&
      re.digit.test(password) &&
      !re.except.test(password) &&
      re.full.test(password)
    ) {
      setPwTrue(false);
      return true;
    } else {
      setPwTrue(true);
      return false;
    }
  }

  function handleInput(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setMailTrue(true);
      return false;
    } else {
      setMailTrue(false);
      return true;
    }
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          gap: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            display: 'flex',
            gap: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 120,
              height: 120,
            }}
            source={require('./lock-padlock-symbol-for-security-interface.png')}
          />
          <Text
            style={{
              width: '80%',
              fontSize: 32,
              fontWeight: 700,
              color: 'black',
            }}>
            LOG IN TO YOUR EXISTING ACCOUNT
          </Text>
        </View>

        <View
          style={{
            width: '80%',
            display: 'flex',
            gap: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              width: '100%',
              height: 60,
              borderRadius: 0,
              borderBottomWidth: 1,
              borderColor: 'black',
              padding: 10,
            }}
            
            placeholder="E-Mail Address"
            keyboardType="default"
            onChangeText={text => {
              setMail(text);
              handleInput(text);
            }}
          />
          <Text
            style={
              ismailTrue
                ? {display: 'flex', width: '100%', color: 'red', padding: 10}
                : {display: 'none'}
            }>
            Mail adres formatı yanlış
          </Text>
          <Text
            style={
              isEmpty1
                ? {display: 'flex', width: '100%', color: 'red', padding: 10}
                : {display: 'none'}
            }>
            Değer Girmediniz
          </Text>
          <TextInput
            style={{
              width: '100%',
              height: 60,
              borderRadius: 0,
              borderBottomWidth: 1,
              borderColor: 'black',
              padding: 10,
            }}
            onChangeText={text => {
              setPassword(text);
              password_validate(text);
            }}
            secureTextEntry={true}
            placeholder="Password"
            keyboardType="default"
          />
          <Text
            style={
              isPaswordTrue
                ? {display: 'flex', width: '100%', color: 'red', padding: 10}
                : {display: 'none'}
            }>
            Password should contain one capital letter and be alpanumeric and
            length btw 8-14
          </Text>
          <Text
            style={
              isEmpty2
                ? {display: 'flex', width: '100%', color: 'red', padding: 10}
                : {display: 'none'}
            }>
            Değer Girmediniz
          </Text>

          <TouchableOpacity
            style={{
              width: '80%',
              height: 60,
              borderRadius: 10,
              display: 'flex',
              marginTop: 20,

              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black',
            }}
            onPress={() => handeLogin()}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: 4,
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
            }}>
            Forgot your password ?
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
            }}>
            Or login by using
          </Text>
          <View
            style={{
              width: '60%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require('./apple.png')}
            />
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require('./facebook.png')}
            />
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require('./google.png')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>

    
  );

  

};

export default LoginScreen;
