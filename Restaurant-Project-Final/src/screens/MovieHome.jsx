import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import axios from 'axios';

const MovieHome = ({route, navigation}) => {
  // const handleBack = () => {
  //   navigation.navigate('Login');
  // };

  const image = require('../../assets/images/solid.jpg');

  const twoSum =() => {
    
  }

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [datarating, setDataRating] = useState([]);

  const {width, height} = Dimensions.get('screen');
  const ItemWidth = width * 0.76;
  const ItemHeight = ItemWidth * 1.47;

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET', 
        url: 'https://imdb-top-100-movies.p.rapidapi.com/', 
        headers: {
          'X-RapidAPI-Key':
            'a2e7a98bf7mshf15e9e125457d3ep1a1768jsnc33b093195ca',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
        },
      };

      try {
        const response = await axios(options);
        setData(response.data); // Process the response data
        console.log(data);
      } catch (error) {
        console.error(error); // Handle any errors
      }
      filterForDrama();
      filterForRating();
    };

    fetchData();
  }, [data]);

  const filterForDrama = () => {
    let filtered1 = data.filter(item => item.genre == 'Drama');
    filtered1 = filtered1.slice(2, 10);
    setData2(filtered1);
  };
  const filterForRating = () => {
    let filtered2 = data.filter(item => item.rating >= '8.5');
    filtered2 = filtered2.slice(0, 5);
    setDataRating(filtered2);
  };

  const styles = StyleSheet.create({
    wrapper: {},
    slide: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },

    text: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
    },
    text2: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 400,
    },
  });


  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}>
      <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
        <ScrollView
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              height: height / 1.7,
            }}>
            <Swiper style={styles.wrapper}>
              {data.slice(5, 10).map((item, index) => (
                <ImageBackground
                  source={{uri: item.image}}
                  resizeMode="cover"
                  style={{flex: 1}}>
                  <View style={styles.slide} key={index}>
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: 'black',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: 0.9,
                        padding: 2,
                      }}>
                      <Text style={{...styles.text, opacity: 1}}>
                        {item.title}
                      </Text>
                      <Text style={styles.text}>{item.rating}</Text>
                    </View>
                  </View>
                </ImageBackground>
              ))}
            </Swiper>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',

              paddingTop: 20,
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{...styles.text, paddingLeft: 20}}>
                Drama Movies
              </Text>
              <Text style={{...styles.text2, paddingRight: 20}}>See All</Text>
            </View>

            <FlatList
              data={data2}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: width / 2.4,
                      paddingLeft: 20,
                      paddingTop: 10,

                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}>
                    <Image
                      source={{uri: item.image}}
                      style={{
                        width: 150,
                        height: 200,

                        resizeMode: 'cover',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',

              paddingTop: 20,
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{...styles.text, paddingLeft: 20}}>
                Highest Rating
              </Text>
              <Text style={{...styles.text2, paddingRight: 20}}>See All</Text>
            </View>
            <FlatList
              data={datarating}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <View
                   key={index}
                    style={{
                      width: width / 2.4,
                      paddingLeft: 20,
                      paddingTop: 10,

                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}>
                    <Image
                      source={{uri: item.image}}
                      style={{
                        width: 150,
                        height: 200,

                        resizeMode: 'cover',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MovieHome;
