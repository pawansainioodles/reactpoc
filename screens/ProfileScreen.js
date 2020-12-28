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

const ProfileScreen=({navigation})=>{
    // console.log(navigation);
    
    return(
        <View >
        
            <Datafetching prop={navigation}/>
  
        </View>
    )
}

export default ProfileScreen;





