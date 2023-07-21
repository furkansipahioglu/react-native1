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
  Touchable,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {BlurView} from '@react-native-community/blur';
import axios from 'axios';
import  Header  from '../components/Header';
import BottomNav from '../components/BottomNav';

const Products = ({route, navigation}) => {
  const [data, setData] = useState([]);
  const [addedProduct, setaddedProduct] = useState();
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [values, setValues] = useState([]);
  const [occurrences, setOccurrences] = useState();
  const [simplifiedArray, setSimplifiedArray] = useState();
  const [likeData, setLikeData] = useState([]);
  const [uniquelikeData, setUniqueLikeData] = useState([]);

  
  function countOccurrences(arr) {
    const counts = {};

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      counts[item] = (counts[item] || 0) + 1;
    }
    setOccurrences(counts) ;
    
   
  }




  useEffect(() => {
    const fetchData = async () => {
      const id_kategory = 0; // Replace with the actual id_kategory value

      try {
        const response = await axios.post(
          'http://www.kursadozdemir.com/Urun/Listele',
          {
            ID_KATEGORI: route.params.kategori,
          },
        );

        setData(response.data);
        // Process the response data
      } catch (error) {
        
      }
    };

    fetchData();
  }, [data]);

  const UpdateSepet= async(urun_id,miktar) =>{
    console.log("güncellendi")
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

  const isAddedBefore=async (urun_id)=>{
   

    try {
      const response = await axios.post('http://www.kursadozdemir.com/Sepet/Listele', {
      "ID_KULLANICI":4,
      });

      if(response.data.NESNE==null){
        addSepet(urun_id)
      }
      
      else{
        response.data.NESNE.map((item)=>{
          if(item.ID_URUN==urun_id){
              UpdateSepet(urun_id,item.MIKTAR)
            }
            else{
              addSepet(urun_id)
            }
           
          }
          )
      }
     
     
      // console.log(response.data.NESNE);
      // Process the response data
    } catch (error) {
      console.error(error);
      // Handle any errors
    }
  }
  

  const addSepet = async (urun_id) => {
   
    const count = 1;

    try {
      const response = await axios.post('http://www.kursadozdemir.com/Sepet/Ekle', {
      "ID_KULLANICI":4,
      "ID_URUN": urun_id,
      "MIKTAR": count,
      });

      // console.log(response.data);
      // Process the response data
    } catch (error) {
      console.error(error);
      // Handle any errors
    }
  };


  function handlePlus(urun_id){



    // Create a new array with the updated values
    const updatedValues = [...values, urun_id];
    setSimplifiedArray([...new Set(updatedValues)]) ;
    
    // Update the state with the new array
    setValues(updatedValues);
    
    countOccurrences(updatedValues)
    setIsAdded(true)
    setIsAlertVisible(true);
    
    setTimeout(() => {
        
        setIsAlertVisible(false);
    }, 2000);
  }

  function handleLike(item){
    setLikeData(prevData => {
      // Check if the item already exists in prevData
      if (prevData.some(prevItem => prevItem.ID_URUN === item.ID_URUN)) {
        return prevData; // Return the same array without adding the item
      } else {
        return [...prevData, item]; // Add the item to the array
      }
    });

      // setUniqueLikeData([...new Set(likeData.map(JSON.stringify))].map(JSON.parse));

  }

  useEffect(() => {
    console.log(likeData);
  }, [likeData]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#131313'}}>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Header isAdded={isAdded} occurrences={occurrences} urun_id={simplifiedArray}/>
          <View style={{
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems: "center",
            paddingTop:30,
            gap:20,
          }}>
            {data.length !== 0
              ? data.NESNE.map((item, index) => (
                <LinearGradient colors={['#FFFFFF', '#FFFFFF']} 
                key={index}
                useAngle={true} angle={125} angleCenter={{x:0.5,y:0.5}}
                    style={{
                        
                        padding:10,
                        height:230,
                        width:"42%",
                        borderRadius:15,
                    }}
                >
                <View style={{
                  position:"relative",
                  justifyContent:"space-between",
                  height:"100%"
                }}>
                    <Image
                        style={{
                        borderRadius:15,
                        width:" 100%",
                        
                        height: "73%",
                        }}
                        source={{uri: item.GORSEL_URL}}
                      />
                      <TouchableOpacity
                      onPress={()=> handleLike(item)}
                      style={{
                        position:"absolute",
                        top:0,
                        right:0
                      }} >
                      <Ionicons name="heart-circle-outline"
                      
                       color={'black'} size={35} />
                            
                      
                      </TouchableOpacity>
                      
                      

                    <View style={{
                        paddingLeft:5,
                        paddingRight:5
                    }}> 
                        <Text
                        style={{
                            color: 'black',
                            fontSize: 18,
                            paddingTop:5,
                            fontFamily: 'Courgette-Regular',
                        }}
                        >
                            {item.ADI}
                        </Text>
                        <View style={{
                            alignItems:"center",
                            flexDirection:"row",
                            justifyContent:"space-between"

                        }}> 
                            <Text
                            style={{
                                color: '#d17842',
                                fontSize: 18,
                                paddingTop:5,
                                fontFamily: 'Courgette-Regular',
                            }}
                            >
                            € {item.FIYAT}
                            </Text>
                           <TouchableOpacity
                           onPress={() => {handlePlus(item.ID_URUN) ; setaddedProduct(item.ADI); isAddedBefore(item.ID_URUN)}}
                           >
                           <FontAwesome name="plus-square" color={'#d17842'} size={30} />
                            
                           </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>
                </LinearGradient>
                ))
              : null}
          </View>

          <View
            style={{
              paddingBottom: 70,
            }}></View>
        </ScrollView>
      </View>
{
    isAlertVisible ? 
    <View
 style={{
    paddingTop: 10,
    paddingBottom: 50,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    justifyContent:"center",
    alignItems: 'center',
    backgroundColor: '#d17842',
    borderRadius: 25,
    
  }}
  >
    
    <Text style={{
        color:"white"
    }}>
        One {addedProduct} Added
    </Text>
</View>
: null
}

      <BottomNav data={likeData} colorActive={"home"}/>
    </SafeAreaView>
  );
};

export default Products;
