import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {useState} from 'react';

const CardChange = ({route, navigation}) => {
  // const handleBack = () => {
  //   navigation.navigate('Login');
  // };
  const [activeCard, setActiveCard] = useState(0);
  const image = require('../../assets/images/landscape.jpg');
  const imageCard1 = require('../../assets/images/peaceful.jpg');
  const imageCard2 = require('../../assets/images/scenery.jpg');
  const imageCard3 = require('../../assets/images/wallpapers.jpg');

  const cards = [
    {
      id: 1,
      card: imageCard1,
      rotate: '6deg',
    },
    {
      id: 2,
      card: imageCard2,
      rotate: '-6deg',
    },
    {
      id: 3,
      card: imageCard3,
      rotate: '6deg',
    },
  ];

  const handeButton = e => {
    if (e == 'prev' && activeCard > 0) {
      setActiveCard(activeCard - 1);
    } else if (e == 'next' && activeCard < 2) {
      setActiveCard(activeCard + 1);
    } else {
      return null;
    }
  };


  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{flex: 1}}
        blurRadius={5}>
        <View>
          <View
            style={{
              display: 'flex',
              height: '75%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            {cards.map((item, index) => (
              <Image
                key={index}
                
                style={
                  activeCard == index
                    ? {
                        shadowColor: '#171717',
                        shadowOffset: {width: -2, height: 4},
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                        width: 300,
                        height: 400,
                        position: 'absolute',
                        zIndex: 2,
                      }
                    : {
                        width: 300,
                        height: 400,
                        opacity: 0.5,
                        position: 'absolute',
                        zIndex: 1,
                        transform: [{rotate: item.rotate}],
                      }
                }
                source={item.card}
              />
            ))}
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 30,
              marginTop: 30,
            }}>
            <TouchableOpacity
              style={{
                width: '30%',
                height: 60,
                borderRadius: 10,
                display: 'flex',
                marginTop: 20,

                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
              }}
              onPress={() => handeButton('prev')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 500,
                }}>
                Previous
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '30%',
                height: 60,
                borderRadius: 10,
                display: 'flex',
                marginTop: 20,

                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
              }}
              onPress={() => handeButton('next')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 500,
                }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
    
  );
  
};

export default CardChange;
