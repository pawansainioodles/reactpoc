import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import {useTheme} from 'react-native-paper';
import MapView, {Marker, Polyline} from 'react-native-maps';

import {Container, Header} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

const Delivery = ({route, product, navigation}) => {
  var countriesProduct = AsyncStorage.getItem('ACCESS_TOKEN');
  // countriesProduct = JSON.parse(countriesProduct);
  // countriesProduct.push(product);
  // AsyncStorage.setItem('ACCESS_TOKEN', JSON.stringify(countriesProduct), err => {
  //   if (err) {
  //     console.log('an error');
  //     throw err;
  //   }
  //   console.log('success');
  // }).catch(err => {
  //   console.log('error is: ' + err);
  // });
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
  const {colors} = useTheme();
  const theme = useTheme();
  const [region, setRegion] = useState({
    latitude: 28.4595,
    longitude: 77.0266,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });
  const CustomMarker = () => (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        borderColor: '#eee',
        borderRadius: 5,
        elevation: 10,
      }}>
      <Text>Gurgoan</Text>
    </View>
  );
  const Berlin = {
    latitude: 52.5200066,
    longitude: 13.404954,
  };

  const Frankfurt = {
    latitude: 50.1109221,
    longitude: 8.6821267,
  };

  useEffect(() => {
    setTimeout(async () => {
      console.log('useEffect');
      console.log(product);

      getdata();
    }, 1000);
  }, []);

  const getdata = async () => {
    try {
      console.log('getdata');
      const value = await AsyncStorage.getItem('ACCESS_TOKEN');
      console.log(value);
      if (value !== null) {
        // setProductData(JSON.parse(value))
        JSON.parse(value).map((item, key) =>
          console.log('state>>==' + item.productName),
        );
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  return (
    <ScrollView>
      <Row
        style={{backgroundColor: '#cccccc', height: 209}}
        onPress={() => {
          navigation.navigate('Warehouselocation');
        }}>
        <View style={[styles.container, {flex: 1}]}>
          <MapView
            style={{flex: 1}}
            region={region}
            onRegionChangeComplete={region => setRegion(region)}>
            <Marker coordinate={{latitude: 28.4595, longitude: 77.0266}} />
          </MapView>
        </View>
      </Row>
      <Container style={{height: 40}}>
        <Grid>
          <Col
            style={{
              backgroundColor: '#cccccc',
              height: 39,
              marginHorizontal: 1,
            }}
            onPress={() => {
              navigation.navigate('Warehouselocation');
            }}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              Location
            </Text>
          </Col>
          <Col
            style={{
              backgroundColor: '#cccccc',
              height: 39,
              marginHorizontal: 1,
            }}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              Status
            </Text>
          </Col>
        </Grid>
      </Container>

      {test.laptop.map((item, key) => (
        <Container style={{height: 40}}>
          <Grid>
            <Col
              style={{
                backgroundColor: '#cccccc',
                height: 39,
                marginHorizontal: 1,
              }}
              onPress={() => {
                navigation.navigate('Warehouselocation');
              }}>
              <Text style={{textAlign: 'center'}}>{item.location}</Text>
            </Col>
            <Col
              style={{
                backgroundColor: '#cccccc',
                height: 39,
                marginHorizontal: 1,
              }}>
              <Text style={{textAlign: 'center'}}>Processing...</Text>
            </Col>
          </Grid>
        </Container>
      ))}

      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('ProductReview');
        }}
      />
    </ScrollView>
  );
};
const mapStateToProps = state => ({product: state.product});

// const mapDispatchToProps = (dispatch) => ({
//         addProduct:(name,quantity)=>dispatch({
//           type:"ADDPRODUCT",
//           payload:{
//             name,
//             quantity,
//             address,
//           },
//      })
// });
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
});
export default connect(mapStateToProps)(Delivery);
