import React,{useState,useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View, RefreshControl,
    Text,AsyncStorage,
    StatusBar,Button,Image,TextInput
  } from 'react-native';

  import { Container, Header } from 'native-base';
  import { Col, Row, Grid } from 'react-native-easy-grid';
  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
const OrderTracking=({navigation})=>{
    const[productdata,setProductData]  = useState([])

  const [refreshing, setRefreshing] = React.useState(false);

 
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

    const test = {
        laptop: [
          {location: 'gurgoan'},
          {location: 'faridabad'},
          {location: 'noida'},
        ],
        mobile: [
          {location: 'gurgoan'},
          {location: 'faridabad'},
          {location: 'noida'},
        ],
        charger: [
          {location: 'gurgoan'},
          {location: 'faridabad'},
          {location: 'noida'},
        ],
      };
      useEffect(() => {
       
        setTimeout(async () => {
            try { 
              const myArray = await AsyncStorage.getItem('allproducts');
              if (myArray !== null) {
                getdata();
              }
              console.log(myArray) 
            } catch (error) {
               
            }
           
        }, 1000);
      }, []);

  const getdata = async () => {
    try {
      console.log("getdata")
      const value = await AsyncStorage.getItem('allproducts'); 
      console.log(value)
      if (value !== null) { 
        setProductData(JSON.parse(value))
        JSON.parse(value).map((item, key) =>
        console.log('state>>==' + item.productName),
        );
      }
    } catch (error) {
      // Error retrieving data
    }
  };
    return(
        <SafeAreaView style={styles.container}>
       <ScrollView
         contentContainerStyle={styles.scrollView}
         refreshControl={
           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
         }
       >
         {getdata}
         { 
         productdata.filter(v => v !== null).map((item, key) => (
        <Container style={{ height: 40 }}>
          <Grid> 
              <Col style={{ backgroundColor: '#cccccc', height: 39 }} onPress={()=>{navigation.navigate('LocationSettingScreen')}}>
              <Text style={{ textAlign: 'center'}} key={key}>{item.productName}</Text>
              </Col>
              <Col style={{ backgroundColor: '#cccccc', height: 39 }}>
              <Text  style={{ textAlign: 'center' }} key={key}>{item.selectedLocation}</Text>
              </Col>
          </Grid>
        </Container>
        ))
        }
       </ScrollView>
     </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    textbackground:{
      backgroundColor:"#cccccc",
      marginTop:5,
      padding:20,
      marginHorizontal:10

    },
    title:{
      backgroundColor:"#444444",
      marginTop:5,
      padding:20,
      marginHorizontal:10

    },
    textInputStyle: {  
      borderColor: '#9a73ef',  
      borderWidth: 1,  
      height: 40,  
      margin: 20,  
      padding: 10,  
    }, 
    input: {
      width: "90%",
      height:80 
    },
})
export default OrderTracking;