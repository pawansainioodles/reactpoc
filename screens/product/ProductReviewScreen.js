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
    AsyncStorage,
  } from 'react-native';
import {connect} from 'react-redux';
import {useTheme, TextInput} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
var SampleArray = [];
const ProductReviewScreen = ({product,navigation,dispatch,route})=>{
    console.log("product")
    console.log(product)
    var datas = [];
    const {colors} = useTheme();
    const [count, setCount] = useState(0); 
    const [productName, setProductName] = useState([]);
    const [address, setAddress] = useState([]);
    const [productid, setproductId] = useState([]);
    const[isEditable,setEditable] = useState(false);
    const[isPlaceOrder,setPlaceOrder] = useState(false);
    const [data, setData] = useState('');
    const[selectedLocation,setSelectedLocation] = useState('')
    const [allProduct, setAllProduct] = useState('');
    const[confirmtext,setConfirmText] = useState('Confirm to continue');
    useEffect(()=>{
        setAddress(product[0].address)
        setCount(product[0].count);
        setProductName(product[0].productName);
        setproductId(product[0].productid);
        setSelectedLocation(route.params.Location)
    },[]);
    AsyncStorage.setItem('ACCESS_TOKEN', JSON.stringify(product), err => {
        if (err) {
          console.log('an error');
          throw err;
        }
        console.log('success');
         
      }).catch(err => {
        console.log('error is: ' + err);
      });
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
              selectedLocation,
            },
           })
          console.log("state=="+product)
          setPlaceOrder(true)
          // AsyncStorage.setItem("productItems",product)
          // navigation.navigate('Deliveryscreen')
        
        //   navigation.navigate('OrderConfirmation')
      }
    const getdata = async () => {
        const x1 = JSON.parse(await AsyncStorage.getItem('ACCESS_TOKEN'));
        const allproduct = JSON.parse(await AsyncStorage.getItem('allproducts'));
        setData(x1);
        setAllProduct(allproduct);
        SampleArray = [];
        if(allProduct !== null){
        allproduct.map((item, key) => SampleArray.push(item));
        }
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
        setTimeout(async () => {
            AddItemsToArray()
         }, 1000);
        
      };
      const getAllItems = ()=>{
        setConfirmText("Please Wait...")
        setTimeout(async () => {
             getdata()
          }, 1000);
      };
      const AddItemsToArray = () => {
        console.log('before');
        console.log(SampleArray);
        console.log('beforedatas');
        console.log(datas[0]);
        SampleArray.push(datas[0]);
        console.log('aftet');
        console.log(SampleArray);
        // navigation.navigate('ProductReview');
        // alert(SampleArray.toString());
        AsyncStorage.setItem('allproducts', JSON.stringify(SampleArray), err => {
          if (err) {
            console.log('an error');
            throw err;
          }
          console.log('success');
          setTimeout(async () => {
            const allproduct = JSON.parse(
              await AsyncStorage.getItem('allproducts'),
            );
            console.warn(allproduct);
            navigation.navigate('Home');
          }, 1000);
        }).catch(err => {
          console.log('error is: ' + err);
        });
      };
 
    return(
        <View style={{flex: 1}}>
        <View style={[{flexDirection: 'row', marginTop: 20,marginHorizontal:20}]}>
        <Text style={{flex: 1,color:colors.text }}>Name</Text>
        <Text style={{flex: 2, color:colors.text}}>{product[0].productName}</Text>
        <Text style={{flex: 1, color:colors.text}}>Edit</Text>
      </View>
      <View style={[{flexDirection: 'row', marginTop: 20,marginHorizontal:20}]}>
        <Text style={{flex: 1, color:colors.text}}>Quantity</Text>
        <Text style={{flex: 2, color:colors.text}}>{count }</Text>
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
                    <Text style={{color: '#ffffff'}}>{count}</Text>
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
      
      </View>
      <View style={[{flexDirection: 'row', marginTop: 20,marginHorizontal:20}]}>
        <Text style={{flex: 1, color:colors.text}}>Address</Text>
        {isEditable?<TextInput onChangeText={(val)=>{setAddress(val)}} style={{height:20,width:160}} placeholder="Address" value={address}/>:<Text style={{flex: 2, color:colors.text}}>{address}</Text>}
        <Text style={{flex: 1, color:colors.text}} onPress={()=>{isEditable?setEditable(false):setEditable(true)}}>{isEditable?"Save":"Edit"}</Text>
      </View>
      <View style={[{flexDirection: 'row', marginTop: 20,marginHorizontal:20}]}>
        <Text style={{flex: 1, color:colors.text}}>Product id</Text>
        <Text style={{flex: 2, color:colors.text}}>{product[0].productid }</Text>
       
      </View>
      <View style={[{flexDirection: 'row', marginTop: 20,marginHorizontal:20}]}>
        
        {!isPlaceOrder?<Button title="Place Order" onPress={()=>{saveItem()}}/>:null}
       {isPlaceOrder?<Button title={confirmtext} onPress={()=>{getAllItems()}}/>:null} 
      </View>
      {/* <View style={{flex: 0.24,backgroundColor:"#ccc"}}>
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
    
     
        <View style={{flex: 1,backgroundColor:"#deefff"}}>
               <Button title="Confirm order" onPress={() => AddItemsToArray()} />
        </View> */}
    </View>
    );
}

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
export default connect(mapStateToProps)(ProductReviewScreen);
 