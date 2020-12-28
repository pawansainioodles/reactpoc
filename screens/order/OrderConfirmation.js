import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  RefreshControl,
  Text,
  AsyncStorage,
  StatusBar,
  Button,
  Image,
  TextInput,
} from 'react-native';
import {Container, Header} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {connect} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';

// import {Container, Header} from 'native-base';
// import {Col, Row, Grid} from 'react-native-easy-grid';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {useTheme} from 'react-native-paper';
const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};
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
var SampleArray = [];
const OrderConfirmation = ({navigation, dispatch, product}) => {
  // console.log(product[0].address);
  console.log(product);
  const [data, setData] = useState('');
  const [allProduct, setAllProduct] = useState('');
  let x = [];
  var datas = [];
  const[initialLocation,setinitialLocation] = useState('Select')
  const[selectedLocation,setSelectedLocation] = useState('')
  const [region, setRegion] = useState({
    latitude: 28.4595,
    longitude: 77.0266,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });
  AsyncStorage.setItem('ACCESS_TOKEN', JSON.stringify(product), err => {
    if (err) {
      console.log('an error');
      throw err;
    }
    console.log('success');
  }).catch(err => {
    console.log('error is: ' + err);
  });
  const AddItemsToArray = () => {
    console.log('before');
    console.log(SampleArray);
    SampleArray.push(data[0]);
    console.log('aftet');
    navigation.navigate('ProductReview',{Location:selectedLocation});
    // alert(SampleArray.toString());
    // AsyncStorage.setItem('allproducts', JSON.stringify(SampleArray), err => {
    //   if (err) {
    //     console.log('an error');
    //     throw err;
    //   }
    //   console.log('success');
    //   setTimeout(async () => {
    //     const allproduct = JSON.parse(
    //       await AsyncStorage.getItem('allproducts'),
    //     );
    //     console.warn(allproduct);
    //     navigation.navigate('ProductReview');
    //   }, 1000);
    // }).catch(err => {
    //   console.log('error is: ' + err);
    // });
  };
  const getdata = async () => {
    const x1 = JSON.parse(await AsyncStorage.getItem('ACCESS_TOKEN'));
    const allproduct = JSON.parse(await AsyncStorage.getItem('allproducts'));
    setData(x1);
    setAllProduct(allproduct);
    SampleArray = [];
    allproduct.map((item, key) => SampleArray.push(item));
    // // x.push(x1[0])
    // setData(x1)
    console.log(x1);
    datas.push(x1[0]);
    // setData(datas)
    // alert(data)
    console.log('x11');
    console.log(x1);
    console.log('datas');
    console.log(datas);
    console.log('allproduct');
    console.log(allproduct);
    console.log('SampleArray');
    console.log(SampleArray);
  };



  const [productName, setProductName] = useState([]);
  const [address, setAddress] = useState([]);
  const [productid, setproductId] = useState([]);
  const {colors} = useTheme();
  const [refreshing, setRefreshing] = React.useState(false);
  const [count, setCount] = useState('');
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    setCount(product[0].count);
    setProductName(product[0].productName);
    setAddress(product[0].address);
    setproductId(product[0].productid);
    setTimeout(async () => {
    getdata();
    }, 1000);
  }, []);

  // setCount(product[0].count);
  // setProductName(product[0].productName);
  // setAddress(product[0].address);
  // setproductId(product[0].productid);

  const saveItem = () => {
    console.warn(datas);
    // var datas = data;
    // datas.concat({"address": "Gjkk", "count": 1, "productName": "EMERALD", "productid": 2});
    // console.warn(datas)
    // datas.concat(data[1])
    // console.warn(datas)
    // x.push(check)
    // console.warn(x)
    // console.log ('productName'+productName)
    //   dispatch({
    //     type:"ADDPRODUCT",
    //     payload:{
    //       productName,
    //       count,
    //       productid,
    //       address,
    //     },
    //    })
    //   console.log("state=="+product)
    //   // AsyncStorage.setItem("productItems",product)
    //   navigation.navigate('Deliveryscreen')
  };

  
  function handleChange(data){
    console.log(data)
    setinitialLocation("Selected")
    setSelectedLocation(data)
  }
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.24,backgroundColor:"#ccc"}}>
      <Grid>
        <Col
            style={{
              backgroundColor: '#eee',
              height: 50,
              justifyContent: 'center',
              flex: 1,
              alignItems: 'center',
            }}>
            <Text>Product</Text>
          </Col>
          <Col
            style={{
              backgroundColor: '#eee',
              height: 50,
              justifyContent: 'center',
              flex: 1,
              alignItems: 'center',
            }}>
            <Text>Quantity</Text>
          </Col>
          <Col
            style={{
              backgroundColor: '#eee',
              height: 50,
              justifyContent: 'center',
              flex: 1,
              alignItems: 'center',
            }}>
            <Text>Update</Text>
          </Col>
        </Grid>
      </View>
      <View style={{flex: 0.24,backgroundColor:"#eee"}}>
      <Grid>
            <Row>
              <Col
                style={{
                  backgroundColor: '#eee',
                  height: 50,
                  justifyContent: 'center',
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text>{productName}</Text>
              </Col>
              <Col
                style={{
                  backgroundColor: '#eeeec4',
                  height: 50,
                  justifyContent: 'center',
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>{count}</Text>
              </Col>
              <Col
                style={{
                  backgroundColor: '#635DB7',
                  height: 50,
                }}>
                <Grid
                  style={{
                    justifyContent: 'center',
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <Col>
                    <TouchableOpacity
                      onPress={() => {
                        setCount(count + 1);
                      }}>
                      <Animatable.Image
                        animation="bounceIn"
                        duraton="1500"
                        tintColor={colors.text}
                        source={require('../product/asset/add.png')}
                        style={styles.logo}
                        resizeMode="stretch"
                      />
                    </TouchableOpacity>
                  </Col>
                  <Col
                    style={{
                      justifyContent: 'center',
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#ffffff'}}>{count}</Text>
                  </Col>
                  <Col>
                    <TouchableOpacity
                      onPress={() => {
                        setCount(count > 0 ? count - 1 : 0);
                      }}>
                      <Animatable.Image
                        animation="bounceIn"
                        duraton="1500"
                        tintColor={colors.text}
                        source={require('../product/asset/minus.png')}
                        style={styles.logo}
                        resizeMode="stretch"
                      />
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </Col>
            </Row>
            <Col>
       
      </Col>
      </Grid>
    </View>
    <View style={{flex: 1,backgroundColor:"#eeefff"}}>
    <Row
        style={{backgroundColor: '#cccccc', height: 209}}
        onPress={() => {
          navigation.navigate('Warehouselocation');
        }}>
        <View style={[styles.container, {flex: 0.5}]}>
          <MapView
            style={{flex: 1}}
            region={region}
            onRegionChangeComplete={region => setRegion(region)}>
            <Marker coordinate={{latitude: 28.4595, longitude: 77.0266}} />
          </MapView>
        </View>
      </Row>
      </View>
      <View style={{flex: 0.6,backgroundColor:"#00dfff"}}>
      
          {test.laptop.map((item, key) => (
        
        <Container style={{height: 40}}>
          {console.log(item.location)}
          <Grid>
            <Col
              style={{
                backgroundColor: '#cccccc',
                height: 39,
                marginHorizontal: 1,
                justifyContent:'center'
              }}
             >
              <Text style={{textAlign: 'center', justifyContent:'center'}} >{item.location}</Text>
            </Col>
            <Col
              style={{
                backgroundColor: '#cccccc',
                height: 39,
                marginHorizontal: 1,
                justifyContent:'center'
              }}>
              <Text style={{textAlign: 'center'}} onPress={()=>{handleChange(item.location)}}>{selectedLocation==item.location? initialLocation:"Select"}</Text>
            </Col>
          </Grid>
        </Container>
      ))}
      
        </View>
        <View style={{flex: 1,backgroundColor:"#deefff"}}>
               <Button title="Confirm order" onPress={() => AddItemsToArray()} />
        </View>
    </View>
     
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 200, // you can customize this
    width: 400, // you can customize this
    flexDirection: 'row',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textbackground: {
    backgroundColor: '#000000',
    marginTop: 5,
    padding: 20,
    marginHorizontal: 10,
  },
  title: {
    backgroundColor: '#000000',
    marginTop: 5,
    padding: 20,
    marginHorizontal: 10,
  },
  textInputStyle: {
    borderColor: '#9a73ef',
    borderWidth: 1,
    height: 40,
    margin: 20,
    padding: 10,
  },
  input: {
    width: '90%',
    height: 80,
  },
  logo: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  counter: {
    fontSize: 20,
  },
});
const mapStateToProps = state => ({product: state.product});
export default connect(mapStateToProps)(OrderConfirmation);
