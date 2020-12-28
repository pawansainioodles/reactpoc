import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {SliderBox} from 'react-native-image-slider-box';
import {FlatList} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import ProgressBar from 'react-native-progress';

const HomeScreen = ({navigation}) => {
  const productposition = {
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
  const [items, setItems] = React.useState([
    {
      id:1,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'TURQUOISE',
      image:
        'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {  id:2,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'EMERALD',
      image:
        'https://cdn.pixabay.com/photo/2012/04/14/13/15/digital-camera-33879__340.png',
    },
    {  id:3,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'PETER RIVER',
      image:
        'https://cdn.pixabay.com/photo/2016/01/08/14/38/coffee-1128140__340.jpg',
    },
    {  id:4,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'AMETHYST',
      image:
        'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707__340.jpg',
    },
    {  id:5,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'WET ASPHALT',
      image:
        'https://cdn.pixabay.com/photo/2017/08/04/20/10/dj-2581269__340.jpg',
    },
    {  id:6,
      desciption:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'GREEN SEA',
      image:
        'https://cdn.pixabay.com/photo/2015/06/25/17/51/radio-821602__340.jpg',
    },
    {  id:7,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'NEPHRITIS',
      image:
        'https://cdn.pixabay.com/photo/2013/12/22/15/30/motherboard-232515__340.jpg',
    },
    {  id:8,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'BELIZE HOLE',
      image:
        'https://cdn.pixabay.com/photo/2016/03/31/18/02/controller-1294077__340.png',
    },
    {  id:9,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'WISTERIA',
      image:
        'https://cdn.pixabay.com/photo/2017/12/23/23/13/computer-3036166__340.jpg',
    },
    {  id:10,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'MIDNIGHT BLUE',
      image:
        'https://cdn.pixabay.com/photo/2014/11/02/06/47/iphone-513495__340.jpg',
    },
    {  id:11,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'SUN FLOWER',
      image:
        'https://cdn.pixabay.com/photo/2017/10/12/22/08/background-2846165__340.jpg',
    },
    {  id:12,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'CARROT',
      image:
        'https://cdn.pixabay.com/photo/2016/02/24/12/30/camera-1219748__340.jpg',
    },
    {  id:13,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'ALIZARIN',
      image:
        'https://cdn.pixabay.com/photo/2016/01/14/05/51/rj45-1139366__340.jpg',
    },
    {  id:14,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'CLOUDS',
      image:
        'https://cdn.pixabay.com/photo/2020/11/23/06/21/television-5768804__340.png',
    },
    {  id:15,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'CONCRETE',
      image:
        'https://cdn.pixabay.com/photo/2015/10/12/14/50/calculator-983900__340.jpg',
    },
    {  id:16,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'ORANGE',
      image:
        'https://cdn.pixabay.com/photo/2017/05/03/22/10/study-room-2282312__340.png',
    },
    {  id:17,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'PUMPKIN',
      image:
        'https://cdn.pixabay.com/photo/2016/04/04/13/16/flash-memory-1306886__340.jpg',
    },
    {  id:18,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'POMEGRANATE',
      image:
        'https://cdn.pixabay.com/photo/2014/05/21/13/31/smartphone-349548__340.png',
    },
    {  id:19,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'SILVER',
      image:
        'https://cdn.pixabay.com/photo/2015/05/19/15/27/piano-773735__340.jpg',
    },
    {  id:20,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      name: 'ASBESTOS',
      image:
        'https://cdn.pixabay.com/photo/2014/04/02/10/16/computer-303283__340.png',
    },
  ]);

  const initialJson = {
    status: {response: 'success', message: 'Product Fetch Successfully'},
    data: {
      product_list: [
        {
          pid: 'p001',
          p_title: 'First',
          p_desc:
            'Tomatoes are a staple in Indian cuisines and across the world too. Fresho hybrid tomatoes are sourced from the best growers and ensure effective costs along with optimal health levels. These tomatsgoes are fresh and juicy in texture and they tend to last much longer than pure breed tomatoes.',
          p_cat: 0,
          p_imageurl:
            'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          p_price: 9.0,
          p_isnew: false,
          p_likes: 150,
          p_islike: false,
        },
        {
          pid: 'p002',
          p_title: 'Second',
          p_desc:
            'Onion is a vegetsgable which is almost like a staple in Indian food. This is also knosgwn to be one of the essesgntial ingredients of raw salads. They come in different colours like white, red or yellow and are quite in demsgand in cold salads and hsgot soups. You can dice, slice or cut it in rings and put it in burgers and sandwiches. Onions emit a sharp flavsgour and fragrance once they are fried; it is due to the sulpgshur compound in the vegetable.',
          p_cat: 0,
          p_imageurl:
            'https://images.pexels.com/photos/5472354/pexels-photo-5472354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          p_price: 15.0,
          p_isnew: true,
          p_likes: 200,
          p_islike: false,
        },
        {
          pid: 'p003',
          p_title: 'Third',
          p_desc:
            'Fresho Potatoes are nutrient-dense, non-fattening and have reasonabsgle amount of calories. Include them in your regular meals so that the body receives a good supply of cagsrbohydrates, dietary fibers and essential minsgerals such as copper, magnsgesium, and iron. In India, potatoes are probably the second-most consumed vegetables after onions.',
          p_cat: 0,
          p_imageurl:
            'https://techup.co.in/wp-content/uploads/2019/01/img_butterfly.jpg',
          p_price: 26.0,
          p_isnew: true,
          p_likes: 300,
          p_islike: false,
        },
        {
          pid: 'p001',
          p_title: 'First',
          p_desc:
            'Tomatoes are a staple in Indian cuisines and across the world too. Fresho hybrid tomatoes are sourced from the best growers and ensure effective costs along with optimal health levels. These tomatsgoes are fresh and juicy in texture and they tend to last much longer than pure breed tomatoes.',
          p_cat: 0,
          p_imageurl:
            'https://techup.co.in/wp-content/uploads/2019/01/img_butterfly.jpg',
          p_price: 9.0,
          p_isnew: false,
          p_likes: 150,
          p_islike: false,
        },
        {
          pid: 'p002',
          p_title: 'Second',
          p_desc:
            'Onion is a vegetsgable which is almost like a staple in Indian food. This is also knosgwn to be one of the essesgntial ingredients of raw salads. They come in different colours like white, red or yellow and are quite in demsgand in cold salads and hsgot soups. You can dice, slice or cut it in rings and put it in burgers and sandwiches. Onions emit a sharp flavsgour and fragrance once they are fried; it is due to the sulpgshur compound in the vegetable.',
          p_cat: 0,
          p_imageurl:
            'https://techup.co.in/wp-content/uploads/2019/01/img_butterfly.jpg',
          p_price: 15.0,
          p_isnew: true,
          p_likes: 200,
          p_islike: false,
        },
        {
          pid: 'p003',
          p_title: 'Third',
          p_desc:
            'Fresho Potatoes are nutrient-dense, non-fattening and have reasonabsgle amount of calories. Include them in your regular meals so that the body receives a good supply of cagsrbohydrates, dietary fibers and essential minsgerals such as copper, magnsgesium, and iron. In India, potatoes are probably the second-most consumed vegetables after onions.',
          p_cat: 0,
          p_imageurl:
            'https://techup.co.in/wp-content/uploads/2019/01/img_butterfly.jpg',
          p_price: 26.0,
          p_isnew: true,
          p_likes: 300,
          p_islike: false,
        },
      ],
    },
  };
  const [product, setProduct] = useState(initialJson);
  const initialImage = {
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?girl',
      'https://source.unsplash.com/1024x768/?tree',
    ],
  };
  const [images, setimage] = useState(initialImage.images);
  const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return {
        id: i,
        src: 'http://placehold.it/200x200?text=' + (i + 1),
      };
    });
    setDataSource(items);
  }, []);
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
      .then(res => res.json())
      .then(resJson => {
        //   console.log(resJson)
        // setDynData({dyndata: resJson});
      })
      .catch(e => console.log(e));
    getdata();
    setTimeout(async () => {
      await AsyncStorage.setItem('productsposition', JSON.stringify(productposition))
        .then(() => {
          console.log('It was saved successfully');
        })
        .catch(() => {
          console.log('There was an error saving the product');
        });

        try {
          const myArray = await AsyncStorage.getItem('productsposition');
          if (myArray !== null) {
            // We have data!!
            console.log(JSON.parse(myArray));
          }
        } catch (error) {
          // Error retrieving data
        }
       
    }, 1000);
  }, []);

  const getdata = async () => {
    try {
      const value = await AsyncStorage.getItem('ACCESS_TOKEN');
      console.log('started2');
      console.log('checkstoragejson' + JSON.parse(value));
      if (value !== null) {
        // We have data!!
        console.log('started2');
        console.log('checkstoragejson' + JSON.parse(value));

        JSON.parse(value).map((item, key) =>
          console.log('state11==' + item.productName),
        );
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  return (
    <ScrollView>
      <SliderBox
        images={images}
        dotColor="#FFEE58"
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
      />
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Product', {data: item})}>
            <View style={[styles.itemContainer]}>
              <ImageBackground source={{uri: item.image}} style={styles.image}>
                <Text style={styles.itemName}>{item.name}</Text>
                {/* <Text style={styles.itemCode}>{item.code}</Text> */}
              </ImageBackground>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
export default HomeScreen;
