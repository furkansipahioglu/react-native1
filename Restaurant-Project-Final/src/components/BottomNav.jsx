import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



function BottomNav ({ data,colorActive }) {
  const [favouriteData, setfavouriteData]=useState()

  useEffect(() => {
    setfavouriteData(data)
    
  }, [data]);
  const isActive=null
  const navigation = useNavigation();
  


    const handleItemPress = (url,data) => {
        navigation.navigate(url,{favouriteItems:data});
      };
  return (
    <View
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          backgroundColor: '#rgb(34,35,38)',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}>
        <TouchableOpacity
        onPress={()=>handleItemPress("Home")}>
        <FontAwesome name="home" color={colorActive=="home"? '#d17842' : "white"}  size={29} />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handleItemPress("Checkout")}
        >
        <FontAwesome name="shopping-basket" color={colorActive=="shop"? '#d17842' : "white"}size={22} />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handleItemPress("Favourites",favouriteData)}
        >
        <Ionicons name="heart-circle-sharp" color={colorActive=="favourite"? '#d17842' : "white"} size={27} />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handleItemPress("Discount")}
        >

        <Ionicons name="star-half" color={colorActive=="discount"? '#d17842' : "white"} size={27} />
        </TouchableOpacity>
        
        
        
      </View>
  )
}

export default BottomNav