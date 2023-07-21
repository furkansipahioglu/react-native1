import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react'
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import {useState, useEffect} from 'react';

const FinalCheck = ({route, navigation}) => {
  const [totalValue, setTotalValue] =useState()
  useEffect(() => {
    setTotalValue(route.params.total)
  },[totalValue]);
 
  console.log(totalValue)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#131313'}}>
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1,
        
      }}>
        
        <Header/>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 30,
            gap: 20,
          }}>
                    <View
                      
                      
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#FAF0E4',
                        padding: 10,
                        height: 180,
                        justifyContent:"space-between",
                        width: '80%',
                        borderRadius: 15,
                      }}>
                
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
                            Total Amount You Have to Pay
                          </Text>
                          <Text
                            style={{
                              color: '#d17842',
                              fontSize: 16,
                              paddingTop: 5,
                              fontFamily: 'Courgette-Regular',
                            }}>
                            Hope you enjoyed
                          </Text>
                          <View style={{
                            flexDirection:"row",
                            alignItems:"flex-end",
                            gap:15

                          }} >
                          <Text
                            style={{
                              color: '#d17842',
                              fontSize: 26,
                              paddingTop: 5,
                              fontFamily: 'Courgette-Regular',
                            }}>
                            € {totalValue}
                          </Text>
                          <MaterialIcons name="payments" color={'black'} size={25} />
                          </View>
                          
                        </View>
                       
                      </View>

                      <View
                        style={{
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          width: '45%',
                        }}>
                        <Image
                          style={{
                            borderRadius: 15,
                            width:"100%",

                            height: '100%',
                          }}
                          source={require('../assets/images/pay.jpg')}
                        />
                       
                      </View>
                    </View>
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
          Pay the price
        </Text>
          </TouchableOpacity>
       
      </View>
    <BottomNav/>
  </SafeAreaView>
  )
}

export default FinalCheck