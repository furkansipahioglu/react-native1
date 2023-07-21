import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import React from 'react';
import {useState, useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomNav from '../components/BottomNav';
import { useNavigation } from '@react-navigation/native';

const Checkout = () => {
  const navigation = useNavigation();
  const [occurrenceRoute, setOccurrenceRoute] = useState();
  const [data, setData] = useState([]);
  const [totalPayment, setTotal] = useState();

  

  const PlusCirclePress= async(urun_id,miktar) =>{
    
    try {
      const response = await axios.post('http://www.kursadozdemir.com/Sepet/Ekle', {
      "ID_KULLANICI":4,
      "ID_URUN": urun_id,
      "MIKTAR": miktar+1,
      });

      
      // Process the response data
     
    } catch (error) {
      console.error(error);
      // Handle any errors
    }
  }

  const MinusCirclePress= async(urun_id,miktar) =>{
    
    try {
      const response = await axios.post('http://www.kursadozdemir.com/Sepet/Ekle', {
      "ID_KULLANICI":4,
      "ID_URUN": urun_id,
      "MIKTAR": miktar-1,
      });

     
      // Process the response data
    
    } catch (error) {
      console.error(error);
      // Handle any errors
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const id_kategory = 0; // Replace with the actual id_kategory value

      try {
        const response = await axios.post(
          'http://www.kursadozdemir.com/Sepet/Listele',
          {
            "ID_KULLANICI":4
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

  function checkoutHandle() {
    let total=0
    
    if(data.length !== 0 && data.NESNE!==null){
     
      data.NESNE.map((item,index)=>{
       
        total+= item.MIKTAR*item.FIYAT
      })
      setTotal(total)

      console.log(total)
      navigation.navigate("FinalCheck",{total:total});
    
      
    }
  
   
   
  }


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#131313'}}>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1,
          
        }}>
          
          <Header />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 30,
              gap: 20,
            }}>
            {data.length !== 0 && data.NESNE!==null
              ? data.NESNE.map((item, index) =>(
                      <View
                        key={index}
                        style={{
                          flexDirection: 'row',
                          backgroundColor: '#ffffff',
                          padding: 10,
                          height: 120,

                          width: '80%',
                          borderRadius: 15,
                        }}>
                        <Image
                          style={{
                            borderRadius: 15,
                            width: ' 50%',

                            height: '100%',
                          }}
                          source={{uri: item.GORSEL_URL}}
                        />
                        <View
                          style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            width: ' 50%',
                          }}>
                          <View
                            style={{
                              padding: 5,
                              paddingLeft: 10,
                              justifyContent: 'space-between',
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                fontSize: 18,
                                paddingTop: 5,
                                fontFamily: 'Courgette-Regular',
                              }}>
                              {item.ADI}
                            </Text>
                            <Text
                              style={{
                                color: '#d17842',
                                fontSize: 18,
                                paddingTop: 5,
                                fontFamily: 'Courgette-Regular',
                              }}>
                              € {item.FIYAT}
                            </Text>
                          </View>
                          <View
                            style={{
                              paddingTop: 10,
                              paddingBottom: 10,
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}>
                            <TouchableOpacity
                            onPress={()=>MinusCirclePress(item.ID_URUN,item.MIKTAR) }
                          
                              >
                              <AntDesign
                                name="minuscircleo"
                                color={'black'}
                                size={20}
                              />
                            </TouchableOpacity>

                            <Text
                              style={{
                                color: '#d17842',
                                fontSize: 18,
                                paddingTop: 5,
                                fontFamily: 'Courgette-Regular',
                              }}>
                              {item.MIKTAR}
                            </Text>
                            <TouchableOpacity
                            onPress={()=>PlusCirclePress(item.ID_URUN,item.MIKTAR) }
                             >
                              <AntDesign
                                name="pluscircle"
                                color={'black'}
                                size={20}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                   
                  ),
                )
              : null}
          </View>
         


          <View
            style={{
              paddingBottom: 70,
            }}></View>
        </ScrollView>
       

      </View>

      <View
          style={{
            backgroundColor: '#d17842',
            paddingTop: 13,
            paddingBottom: 13,
            marginBottom:80,
            width:"80%",

            alignSelf:"center",
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderRadius: 7,
            color:"white"
          }}>
            <TouchableOpacity 
            onPress={()=> checkoutHandle()}
            style={{
              flexDirection:"row",
              alignItems:"center",
              gap:15,
            }}>
            <Feather name="check-circle" color={'white'} size={25} />
            <Text 
            style={{
              color:"white",
              fontSize: 19,           
              fontFamily: 'Courgette-Regular',
            }}
          >
            Checkout
          </Text>
            </TouchableOpacity>
         
        </View>
      <BottomNav colorActive={"shop"}/>
    </SafeAreaView>
  );
};

export default Checkout;
