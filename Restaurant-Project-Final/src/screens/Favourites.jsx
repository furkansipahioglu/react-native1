import React from 'react';
import {useState, useEffect} from 'react';
import  Header  from '../components/Header';
import BottomNav from '../components/BottomNav';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

const Favourites = ({route, navigation}) => {
    const [isAdded, setIsAdded] = useState(false);
    const [favouriteItems, setfavouriteItems] = useState([]);
    useEffect(() => {
      if(route.params.favouriteItems){
        setfavouriteItems(route.params.favouriteItems)
      }
        
      }, [favouriteItems]);
    console.log(favouriteItems)

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#131313'}}>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Header />
           <View style={{
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems: "center",
            paddingTop:30,
            gap:20,
          }}>
            {favouriteItems !==[] 
              ? favouriteItems.map((item, index) => (
                <LinearGradient colors={['#FFEFBA', '#FFFFFF']} 
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
{/* {
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
} */}

      <BottomNav colorActive={"favourite"}/>
    </SafeAreaView>
  )
}

export default Favourites