import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button
} from 'react-native';
import Datafetching from '../Apis/Datafetching';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NewScreen=({route,navigation})=>{
    console.log(route.params);
   
    return(
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity>
                <Text style={{color:"#fff"}}>{route.params.item.title}</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default NewScreen;








 
