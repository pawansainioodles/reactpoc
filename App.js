 
import React,{useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider as PaperProvider ,
        DefaultTheme as PaperDefaultTheme,
        DarkTheme as PaperDarkTheme
   } from 'react-native-paper'
import { NavigationContainer,
   DefaultTheme as NavigationDefaultTheme
  ,DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { cos } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'
import MainTabScreen from './screens/MainTabScreen';
import DrawerContent from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import BookMarkScreen from './screens/BookMarkScreen';
import SettingScreen from './screens/SettingScreen';
import RootStackScreen from './screens/RootStackScreen';
import { ActivityIndicator } from 'react-native-paper';
import {AuthContext} from './components/Context'
import {AsyncStorage} from 'react-native';  
import Users from './models/users'
import {Provider} from 'react-redux'
import {store} from './redux/store'

const Drawer = createDrawerNavigator();


const App = () => {

  // const[isLoading,setIsLoading] = React.useState(true);
  // const[userToken,setUserToken] = React.useState(null);
  const [isDarkTheme,setIsDarkTheme] = React.useState(false)
  const initialLoginState = {
    isLoading:true,
    userName:null,
    userToken:null,
  };

  const loginReducer = (prevState,action) => {
        switch (action.type) {
          case "RETERIVE_TOKEN":
            return {
              ...prevState,
              userToken:action.token,
              isLoading:false,
            };
          case "LOGIN":
            return {
              ...prevState,
              userName:action.id,
              userToken:action.token,
              isLoading:false,
            };  
          case "LOGOUT":
            return {
              ...prevState,
              userName:null,
              userToken:null,
              isLoading:false,
            };
          case "REGISTER":
            return {
              ...prevState,
              userName:action.id,
              userToken:action.token,
              isLoading:false,
            };       
        
          default:
            break;
        }
  };

  const[loginState,dispatch] = React.useReducer(loginReducer,initialLoginState);


  const authContext = React.useMemo(()=>({
    signIn:async(foundUser)=>{
        // setUserToken("abcd");
        // setIsLoading(false);
        
        const userToken=String(foundUser[0].userToken);
        const userName=String(foundUser[0].username);
          try{
             await AsyncStorage.setItem('userToken',userToken);  
          }catch(e){
            console.log(e);
          }
       
        console.log("user token:"+userToken);
        
        dispatch({type:"LOGIN",id:userName,token:userToken});
    },
    signOut:async()=>{
      // setUserToken(null);
      // setIsLoading(false);
      try{
         await AsyncStorage.removeItem('userToken');  
        }catch(e){
          console.log(e);
        }
      dispatch({type:"LOGOUT"});
    },
    signUp:(userName)=>{
      // setUserToken("abcd");
      // setIsLoading(false);
      const userToken = userName
      dispatch({type:"REGISTER",token:userToken});
    },
    toggleTheme:()=>{
      setIsDarkTheme(isDarkTheme=>!isDarkTheme)
    },
  }),[]);


  useEffect(()=>{
    setTimeout(async()=>{
       // setIsLoading(false);
       let userToken;
       userToken = null;
       try{
        userToken = await AsyncStorage.getItem('userToken');  
        }catch(e){
          console.log(e);
        }
       console.log("user token:"+userToken);
       dispatch({type:"REGISTER",token:userToken});
    },1000);
  }
  ,[]);

  if(loginState.isLoading){
      return(
        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
          <ActivityIndicator size="large"
          />
        </View>
      )
  }


  const customDefaultTheme={
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background:'#ffffff',
      text:'#333333'
    }
  }

  const customDarkTheme={
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors:{
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background:'#333333',
      text:'#ffffff'
    }
  }

  const theme = isDarkTheme? customDefaultTheme:customDarkTheme;

  return (
    <PaperProvider   theme={theme}>
    <AuthContext.Provider value={authContext}>
   <Provider store={store}>
    <NavigationContainer theme={theme} >
      {loginState.userToken != null?(
        <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
        <Drawer.Screen name="BookMark" component={BookMarkScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator> 
      ):
      <RootStackScreen/>
    }
    </NavigationContainer>
    </Provider>
    </AuthContext.Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
