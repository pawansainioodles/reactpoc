import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button,
  AsyncStorage,TextInput
} from 'react-native';

import { useTheme } from 'react-native-paper';
import MapView, { Marker, Polyline  } from "react-native-maps";
import {connect} from 'react-redux'
import { useNavigation } from '@react-navigation/native';
const UserDeliveryAddress = ({route,dispatch,product}) => {
  // console.log(props.product);
  console.log(product)
  console.log("testing"+route.params.ProductName+" == "+route.params.Quantity+" == "+route.params.product_id)
  const[test,settest] = useState([])
  const productName = route.params.ProductName
  const count = route.params.Quantity
  const productid = route.params.product_id
  const{ colors } = useTheme()
  const theme = useTheme()
  const navigation = useNavigation(); 
  const[address,setAddress] = useState('')
 

//   AsyncStorage.setItem('ACCESS_TOKEN', JSON.stringify(product), (err)=> {
//     if(err){
//         console.log("an error");
//         throw err;
//     }
//     console.log("success");
//     getdata()
// }).catch((err)=> {
//     console.log("error is: " + err);
// });

  useEffect(()=>{ 
    setTimeout(async()=>{
      // await AsyncStorage.setItem('products', JSON.stringify(product) )
      // .then( ()=>{
      // console.log('It was saved successfully')
      // } )
      // .catch( ()=>{
      // console.log('There was an error saving the product')
      // } );
      // console.log("finaltesting")
        
    
   },1000);
  },[])

  const getdata=async()=>{
    try {
         console.log("finaltesting2")
         const value = await AsyncStorage.getItem('ACCESS_TOKEN');
        if (value !== null) {  
            settest(value)
        }
    } catch (error) {
        // Error retrieving data
    }
  }

  const saveItem=()=>{ 
    dispatch({
      type:"RESET",
      payload:{
      },
     })
    console.log("saveItemtesting"+productName+" == "+count)
      dispatch({
        type:"ADDPRODUCT",
        payload:{
          productid,
          productName,
          count,
          address,
        },
       })
      console.log("state=="+product)
      // AsyncStorage.setItem("productItems",product)
      // navigation.navigate('Deliveryscreen')
      
      navigation.navigate('OrderConfirmation')
  }

 
  return (
    <View>
        <View style={[{flexDirection: 'row', marginTop: 20,marginHorizontal:20}]}>
        <Text style={{flex: 1,color:colors.text}}>Name</Text>
        <Text style={{flex: 2,color:colors.text}}>{route.params.ProductName}</Text>
      </View>
      <View style={[{flexDirection: 'row', marginTop: 20,marginHorizontal:20}]}>
        <Text style={{flex: 1,color:colors.text}}>Quantity</Text>
        <Text style={{flex: 2,color:colors.text}}>{route.params.Quantity}</Text>
      </View>
         <TextInput  
        multiline = {true}  
        numberOfLines = {10}   
        style={[styles.textInputStyle,styles.input]}  
          placeholder="Enter your Address"  
          placeholderTextColor="white"  
          onChangeText={text => setAddress(text)}
        /> 
          <View style={{ marginTop: 10,marginHorizontal:20,justifyContent:'center',alignItems:'flex-start',alignContent:'center' }}>
        {/* <Button
          title="submit" style={{width:'50%'}} color="#2E8B57"  
          onPress={() => navigation.navigate("Deliveryscreen")}
        /> */}
        <Button
          title="submit" style={{width:'50%'}} color="#2E8B57"  
          onPress={() => saveItem()}
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
export default connect(mapStateToProps)(UserDeliveryAddress);
// const connectComponent = connect(mapStateToProps,mapDispatchToProps);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 200, // you can customize this
    width: 400, // you can customize this
    flexDirection: 'row',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textInputStyle: {  
    borderColor: '#ffffff',  
    borderWidth: 1,  
    height: 40,  
    margin: 20,  
    padding: 10,  
  }, 
  input: {
    width: "90%",
    height:80 ,
    color:'#ffffff'
  },
});

// export default connectComponent(UserDeliveryAddress);
