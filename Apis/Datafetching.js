import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import { View, Text, FlatList, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {connect} from 'react-redux'
const Stack = createStackNavigator();

const initialState = {
    loading: true,
    error: '',
    posts: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCESS":
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: ''
            }

            break;
        case "FAILURE":
            return {
                ...state,
                loading: false,
                posts: [],
                error: 'something is wrong'
            }
            break;

        default:
            return state;
    }
}


const Datafetching = (props) => {

    console.log(props.prop);
    
    // const [state, dispatch] = useReducer(reducer, initialState)
    const { navigate } = props.prop;
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                //dispatch({ type: 'SUCESS', payload: response.data })
                props.onSucess(response.data)
            }).catch(error => {
                //dispatch({ type: 'FAILURE', payload: response.data, error: 'someting is wrong' })
                props.onFailure('someting is wrong')
            })
    }, []);
    let [responseData, setResponseData] = React.useState('')
    console.log("testingg"+props)
    return (
          
        <View>
            <FlatList
                data={props.posts.posts}
                keyExtractor={(item,index) => item.id.toString()}
                renderItem={({ item }) =>
                    <View style={{ margin: 5 }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, height: 60, backgroundColor: '#444', padding: 5, borderRadius: 10 }}>
                            <View style={{ flex: 0.5, height: '100%', width: '100%' }}>
                                <Image style={{ height: 50, width: 50 }} source={require('../assets/logo.png')} />
                            </View>
                            <Text style={{ color: "#ffffff", flexDirection: 'row', flex: 3, paddingHorizontal: 10 }}
                            onPress={()=> navigate('newscreen',{item})}
                               >{item.title}</Text>
                        </View>
                    </View>}
            />
        </View>
    );

}
const mapStateToProps=(state)=>({
    posts:state.posts
});
 
const mapDispatchToProps=(dispatch)=>({
    onSucess:(posts)=>
    dispatch({type: 'SUCESS', payload:{posts}}),
    onFailure:(error)=>
    dispatch({type: 'FAILURE', payload:{error}})
});

const connectComponent = connect(mapStateToProps,mapDispatchToProps);


export default connectComponent(Datafetching);