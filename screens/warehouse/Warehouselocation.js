import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,AsyncStorage,
  StatusBar,Button,Image,
} from 'react-native';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const Warehouselocation = ({navigation}) => {
  const[productdata,setProductData]  = useState([])
  const test =   {"laptop":[{"location":"gurgoan"},{"location":"faridabad"},{"location":"noida"}],"mobile":[{"location":"gurgoan"},{"location":"faridabad"},{"location":"noida"}],"charger":[{"location":"gurgoan"},{"location":"faridabad"},{"location":"noida"}]}
  useEffect(() => {
    getdata();
    setTimeout(async () => {
        try {
          const myArray = await AsyncStorage.getItem('productsposition'); 
          if (myArray !== null) {
            // We have data!!
            //console.log(JSON.parse(myArray));
          }
          console.log(myArray)
          console.log(test.laptop)
          test.laptop.map((item, key) =>
          console.log('state11==' + item.location),
        );
        } catch (error) {
          // Error retrieving data
        }
       
    }, 1000);
  }, []);

  const getdata = async () => {
    try {
      const value = await AsyncStorage.getItem('ACCESS_TOKEN'); 
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
    return (
      <ScrollView >
       { test.laptop.map((item, key) => (
        //    <View style={[styles.textbackground]}>
        //   <View style={[{ flexDirection: 'row', flexWrap: 'wrap', flex: 1,height: '100%', width: '100%'}]}>
        //    <Text style={{  flex: 1 }}>{item.productName}</Text>
        //    <Text style={{  flex: 1 }}>{item.count}</Text>
        //    </View>
        //  </View>
        <Container style={{ height: 40 }}>
        <Grid> 
          <Col style={{ backgroundColor: '#cccccc', height: 39 }} onPress={()=>{navigation.navigate('Warehouselocation')}}>
          <Text style={{ textAlign: 'center'}} >{item.location}</Text>
          </Col>
          <Col style={{ backgroundColor: '#cccccc', height: 39 }}>
          <Text  style={{ textAlign: 'center' }}>Processing...</Text>
          </Col>
        </Grid>
        </Container>
        ))}
      </ScrollView>
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

      }
  })
  export default Warehouselocation;