import {View, Text, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const Header = ({ isAdded, occurrences,urun_id }) => {
  const navigation = useNavigation();

function handleCheckout(){
    navigation.navigate('Checkout');
}


  return (
    <View>
      <View>
        <View
          style={{
            padding: 30,
            paddingBottom: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            style={{
              backgroundColor: 'white',
              borderRadius: 50,

              width: 55,
              height: 55,
            }}
            source={require('../assets/images/logo.png')}
          />
          <TouchableHighlight
           onPress={() => handleCheckout()}
          >
            <View
              style={{
                position: 'relative',
              }}>
              <FontAwesome name="shopping-basket" color={'white'} size={25} />
              {isAdded ? (
                <View
                  style={{
                    position: 'absolute',
                    top: -7,
                    right: 0,
                  }}>
                  <Octicons name="dot-fill" color={'#FF0060'} size={25} />
                </View>
              ) : null}
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View
        style={{
          paddingLeft: 30,
        }}>
        <Text
          style={{
            color: '#d17842',
            fontSize: 28,
            fontFamily: 'Courgette-Regular',
          }}>
          Hoşgeldiniz
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            width: '85%',
            fontFamily: 'Courgette-Regular',
          }}>
          Aradığınız lezzeti burada bulabilirsiniz
        </Text>
      </View>
    </View>
  );
};

export default Header;
