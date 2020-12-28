import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';
import { set, color } from 'react-native-reanimated'; 
import { AuthContext } from '../components/Context';

const SignUpScreen = ({ navigation }) => {
    const{ colors } = useTheme()
    const theme = useTheme()
    const { signUp } = React.useContext(AuthContext);
    const [data, setData] = React.useState({
        email: '',
        password: '',
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        check_textinputchange: false,
       // isValidUser: true,
        isValidPassword: true,
        isValidConfirmPassword: true
    });

    const textChangeHandler = (inputval) => {
        if (inputval.trim().length >= 4) {
            setData({
                ...data,
                email: inputval,
                check_textinputchange: true,
                //isValidUser: true
            });
        } else {
            setData({
                ...data,
                email: inputval,
                check_textinputchange: false,
             //   isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
        // if (val.trim().length >= 4) {
        //     setData({
        //         ...data,
        //         password: val,
        // //        isValidPassword: true
        //     });
        // } else {
        //     setData({
        //         ...data,
        //         password: val,
        //    //     isValidPassword: false
        //     });
        // }
    }
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
        // if (val.trim().length >= 4) {
        //     setData({
        //         ...data, 
        //         password: val,
        //    //     isValidConfirmPassword: true
        //     });
        // } else {
        //     setData({
        //         ...data,
        //         password: val,
        //       //  isValidConfirmPassword: false
        //     });
        // }
    }

    const updateSecureTextEntry = () => {
        console.warn(data.secureTextEntry)
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
           
        });

    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    // const handleValidUser = (val) => {
    //     if (val.length >= 4) {
    //         setData({
    //             ...data,
    //          //   isValidUser: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //          //   isValidUser: false
    //         });
    //     }
    // }

    const signInAsGuest=()=>{
        console.warn(data.email)
        signUp(data.email)
    }

    return (
        <View style={[styles.container]}>
            <StatusBar backgroundColor='#05375a' barStyle={theme.dark?"dark-content":"light-content"} />
            <View style={[styles.header]}>
                <Text style={[styles.registerText]}>Register</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer,{backgroundColor:colors.background}]}>
                <Text style={[styles.text_footer]}>UserName</Text>
                <View style={[styles.action]}>
                    <FontAwesome color={colors.text} size={20} name='user-o' />
                    <TextInput  
                        onChangeText={(inputval)=>textChangeHandler(inputval)}
                        placeholder="Username" style={[styles.inputText,{color:colors.text}]}/>
                          {/* onEndEditing={(e) => { handleValidUser(e.nativeEvent.text) }}>   */}
                    {data.check_textinputchange ?
                        <Animatable.View animation="bounceIn">
                            <Feather name='check-circle' color='green' size={30} />
                        </Animatable.View>
                        : null
                    }
                </View>
                {/* {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={[styles.errorMsg]}>Username must be longer than 4 character</Text>
                    </Animatable.View>
                } */}
                <Text style={{color:"#ffffff"}}>{console.warn(data)}</Text>
                <Text style={[styles.text_footer, { marginTop: 15 }]}>Password</Text>
                <View style={[styles.action]}>
                    <Feather size={20} name='lock' color={colors.text}/>
                    <TextInput
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                        placeholder="Password"
                        style={[styles.inputText,{color:colors.text}]} />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Feather name='eye-off' size={20} color={colors.text}/>
                            :
                            <Feather name='eye' size={20} color={colors.text}/>
                        }
                    </TouchableOpacity>
                </View>
                {/* {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={[styles.errorMsg]}>Password must have min 8 character</Text>
                    </Animatable.View>
                } */}
                <Text style={[styles.text_footer, { marginTop: 15 }]}> Confirm Password</Text>
                <View style={[styles.action]}>
                    <Feather size={20} name='lock'  color={colors.text}/>
                    <TextInput secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                        placeholder="Confirm Password" style={[styles.inputText,{color:colors.text}]}></TextInput>
                    <TouchableOpacity onPress={()=>{updateConfirmSecureTextEntry}}>
                    {data.confirm_secureTextEntry?    
                    <Feather name='eye-off' size={20} color={colors.text}/>
                    : <Feather name='eye' size={20} color={colors.text}/>}
                    </TouchableOpacity>
                </View>
                {/* {data.isValidConfirmPassword?null:
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={[styles.errorMsg]}>Password must have min 8 character</Text>
                </Animatable.View>
                } */}
                 <TouchableOpacity onPress={() => signInAsGuest()}>
                <View style={[styles.button]}>
                    <LinearGradient
                        colors={["#05375a", "#eeeeee"]} style={[styles.signIn]}>
                        <Text>Register</Text>
                    </LinearGradient>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={[styles.button]}>
                        <View style={[styles.signinbutton]}>
                            <Text>Sign In</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Animatable.View >
        </View>
    );
};

export default SignUpScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05375a'
    },
    signinbutton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        borderWidth: 1,
        alignItems: 'center',
        borderColor: "#eeeeee",
        borderRadius: 10
    },
    header: {
        flex: 1,
        justifyContent: 'center'
    },
    registerText: {
        fontSize: 30,
        color: "#ffffff",
        fontWeight: 'bold',
        paddingHorizontal: 20
    },
    inputText: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 20
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});


 