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
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {BlurView} from '@react-native-community/blur';
import axios from 'axios';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

function HomePage({route, navigation}) {
  const image = require('../assets/images/restaurant-bg.jpg');

  const [data, setData] = useState([]);
  const aciklama =[
    "Özel çekim kahveler sizi bekliyor",
    "İçinizi rahatlatıcak çaylarımızı deneyin",
    "Canı tatlı çekenler için",
    "Sıcaktan bunalanlar için",
  ]

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

        
        setData(response.data);
        // Process the response data
      } catch (error) {
        console.error(error); // Handle any errors
      }
    };

    fetchData();
  }, [data]);


  const handleItemPress = (katagori_id) => {
    navigation.navigate('Products',{kategori:katagori_id});
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#131313'}}>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
         <Header/>

          {data.length !== 0
            ? data.NESNE.map((item, index) => (
                <TouchableOpacity
                key={index}
                onPress={() => handleItemPress(item.ID_KATEGORI)}
                
                >

              
                <View
                  
                  style={{
                    position: 'relative',
                    paddingTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LinearGradient
                    colors={['#ffffff', '#ffffff']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{
                      height: 150,
                      borderRadius: 15,
                      padding: 0,
                      width: '85%',
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <View style={{
                      justifyContent:"flex-start"
                    }}>
                      <Image
                        style={{
                            borderRadius:15,
                          width: 200,
                          height: "100%",
                        }}
                        source={{uri: item.GORSEL_URL}}
                      />
                    </View>
                    <View style={{
                      width:"40%",
                        gap:10,
                        
                    }}>
                      <Text style={{
                        color: '#d17842',
                        
                        fontSize: 18,
                        fontFamily: 'Courgette-Regular',
                      }}>{item.ADI}</Text>
                      <Text style={{
                        color: '#131313',
                        width:"100%",
                        fontSize: 14,
                        fontFamily: 'Courgette-Regular',
                      }}>{aciklama[index]}</Text>
                      {item.ADI.includes("Kahve") ?
                      <Fontisto name="coffeescript" color={'black'} size={20} />
                      : item.ADI.includes("Çay") ?
                      <MaterialCommunityIcons  name="tea" color={'black'} size={25} />
                      : 
                      item.ADI.includes("Pasta") ?
                      <MaterialCommunityIcons  name="cupcake" color={'black'} size={25} />
                      : 
                      item.ADI.includes("Dondurma") ?
                      <MaterialCommunityIcons  name="ice-cream" color={'black'} size={25} />
                      : null
                    }
                      
                    </View>
                  </LinearGradient>
                </View>
                </TouchableOpacity>
              ))
            : null}
          <View
            style={{
              paddingBottom: 70,
            }}></View>
        </ScrollView>
      </View>

      <BottomNav colorActive={"home"}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default HomePage;
