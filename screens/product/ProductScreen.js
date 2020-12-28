import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button,AsyncStorage
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import MapView from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {createStore} from 'redux';
import {connect} from 'react-redux'

const ProductDetails = ({route,navigation,dispatch,product}) => {
  
  console.log("idtest"+route.params.data.id+" == "+route.params.data.name);

  const[productName,setProductName] = useState('')
  const[id,setId] = useState(0)
  const[count,setCount] = useState(0) 
  const{ colors } = useTheme()
  const theme = useTheme()
 
 
  const saveItem=()=>{
    console.log('productName'+productName)
    console.warn(route.params.data.name)
      dispatch({
        type:"ADDPRODUCT",
        payload:{
          productName,
          count,
          id,
        },
       })
       console.log("state=="+product)
      AsyncStorage.setItem("productItems",product)
      navigation.navigate('UserDeliveryAddress')
  }

  // useEffect(()=>{
  //   fetchdata()
  // },[])

  // async function fetchdata(){
  //   try {
  //     const value = await AsyncStorage.getItem('productItems');
  //     console.log('JSON.parse(value)'+value);
  //     if (value !== null) {
  //         // We have data!!
  //         console.log(JSON.parse(value));
  //     }
  // } catch (error) {
  //     // Error retrieving data
  // }
  // }
  return (
    
    <View style={{flex: 1}}>
      {/* { product.map((item, key) => (
 
        console.log("state=="+item.productName)

        ))} */}
      <Image
        style={{width: '100%', height: 200}}
        source={{uri: route.params.data.image}}
      />
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{flex: 1,color:colors.text}}>Name</Text>
        <Text style={{flex: 2,color:colors.text}}>{route.params.data.name}</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{flex: 1,color:colors.text}}>Description</Text>
        <Text style={{flex: 2,color:colors.text}}>{route.params.data.description}</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20,justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>{setCount(count+1),setProductName(route.params.data.name),setId(route.params.data.id)}}>
      <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                tintColor={colors.text}
            source={require('../product/asset/add.png')}
            style={styles.logo}
            resizeMode="stretch"
            
            />
            </TouchableOpacity>
            <Text style={[styles.counter,{color:colors.text}]}>{count}</Text>
            <TouchableOpacity onPress={()=>{count>0?setCount(count-1):setCount(0)}}>
            {/* <TouchableOpacity onPress={()=>saveItem()}> */}
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                tintColor={colors.text}
            source={require('../product/asset/minus.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
            </TouchableOpacity>
             </View>
      <View
        style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
        {/* <Button onPress={()=>navigation.navigate('Deliveryscreen',{data:"item"})} */}
        {/* <Button onPress={() => setState([...state, "again"])} */}
        {/* <Button onPress={() => saveItem()}
          style={{color: 'red', marginTop: 10, padding: 10}}
          title="Add to cart"
        /> */}
         <Button onPress={()=>navigation.navigate('UserDeliveryAddress',{ProductName:productName,Quantity:count,product_id:id})}
          style={{color: 'red', marginTop: 10, padding: 10}}
          title="Add to cart"
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state)=>({product:state.product});

// const mapDispatchToProps = (dispatch) => ({
//         addProduct:(name,quantity)=>dispatch({
//           type:"ADDPRODUCT",
//           payload:{
//             name,
//             quantity,
//           },
//      })
// });
 

// const connectComponent = connect(mapStateToProps,mapDispatchToProps);

export default connect(mapStateToProps)(ProductDetails);
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 240, // you can customize this
    width: 400, // you can customize this
    flexDirection: 'row',
    marginTop: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  logo:{
    height:30,
    width:30,
    marginHorizontal:10
  },
  counter:{
    fontSize:20,
  }
});

