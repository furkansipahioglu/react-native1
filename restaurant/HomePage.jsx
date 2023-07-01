import React from 'react';
import {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import {BlurView} from '@react-native-community/blur';
import axios from 'axios';

function HomePage() {

  const image = require('./assets/images/restaurant-bg.jpg');

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const id_kategory = 0; // Replace with the actual id_kategory value

      try {
        const response = await axios.post(
          'http://www.kursadozdemir.com/Kategori/Listele',
          {
            ID_KATEGORI: id_kategory,
          },
        );

        console.log(response.data);
        setData(response.data);
        // Process the response data
      } catch (error) {
        console.error(error); // Handle any errors
      }
    };

    fetchData();
  }, [data]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#040303'}}>
      <ScrollView style={{flex: 1}}>
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
              source={require('./assets/images/logo.png')}
            />
            <FontAwesome name="shopping-basket" color={'white'} size={25} />
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
            Welcome
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              width: '85%',
              fontFamily: 'Courgette-Regular',
            }}>
            Find the best coffee experience for you
          </Text>
        </View>

        {data.length !== 0
          ? data.NESNE.map((item, index) => (
              <View
                key={index}
                style={{
                  position: 'relative',
                  paddingTop: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <LinearGradient
                  colors={['#d17842', '#772F1A']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{
                    height: 150,
                    borderRadius: 15,
                    padding: 0,
                    width: '85%',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  <View style={{}}>
                    <Image
                      style={{
                        width: 150,
                        height: 100,
                      }}
                      source={{uri: item.GORSEL_URL}}
                    />
                  </View>
                  <View>
                    <Text>başlık</Text>
                    <Text>Açıklama</Text>
                    <Feather name="eye" color={'white'} size={25} />
                  </View>
                </LinearGradient>
              </View>
            ))
          : null}
        <View
          style={{
            padding: 20,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'gray',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default HomePage;
