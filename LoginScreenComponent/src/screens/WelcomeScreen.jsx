import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useState} from 'react';

const WelcomeScreen = ({route, navigation}) => {
  const handleBack = () => {
    navigation.navigate('Login');
  };

  console.log(route.params[0].name);
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#1B2430',
        height: '100%',
      }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '100%',
        }}>
        <Image
          style={{
            width: 260,
            height: 260,
          }}
          source={require('./welcome.png')}
        />
        <View
          style={{
            display: 'flex',
            gap: 40,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}>
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={require('./profile.png')}
            />
            <Text
              style={{
                width: '80%',
                color: 'white',
                textAlign: 'center',
                fontSize: 26,
                fontWeight: 600,
              }}>
              Welcome
            </Text>
            <Text
              style={{
                width: '80%',
                color: 'white',
                textAlign: 'center',
                fontSize: 26,
                fontWeight: 600,
              }}>
              {route.params[0].name}
            </Text>
            {/* <Text>Welcome to {route.params.name}'s profile</Text> */}
          </View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <Text
              style={{
                width: '100%',
                color: 'gray',
                fontSize: 16,
                fontWeight: 400,
                textAlign: 'center',
              }}>
              This is your password keep it until you change
            </Text>
            {/* <Text>Welcome to {route.params.name}'s profile</Text> */}
          </View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems:"center",
              flexDirection: 'row',
              gap: 10,
            }}>
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require('./padlock.png')}
            />
            <Text
              style={{
                
                color: 'gray',
                fontSize: 16,
                fontWeight: 400,
                textAlign: 'center',
              }}>
              {route.params[1].password}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: '80%',
            height: 60,
            borderRadius: 10,
            display: 'flex',
            marginTop: 20,

            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
          onPress={() => handleBack()}>
          <Text
            style={{
              color: '#040300',
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 3,
            }}>
            GO BACK
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
