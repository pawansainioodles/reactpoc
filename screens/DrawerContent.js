import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import {useTheme, Avatar, Title,
     Caption, Paragraph, Drawer,
      Text, TouchableRipple, Switch 
    } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
 
import {AuthContext} from '../components/Context'



const DrawerContent = (props) => {

    const [isDarkTheme,setIsDarkTheme] = React.useState(false)
    const paperTheme = useTheme()
    const{signOut,toggleTheme} = React.useContext(AuthContext)
    // const toggleTheme=()=>{
    //     setIsDarkTheme(!isDarkTheme)
    // }

    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image
                                source={{ uri: 'https://api.adorable.io/avatars/50/abott@adorable.png' }} size={50} />
                       <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                            <Title style={styles.title}>Pawan</Title>
                            <Caption style={styles.caption}>Pawan@gmail.com</Caption>
                        </View>
                        </View>
                        <View style={styles.row}>
                                 <View style={styles.section}>
                                    <Paragraph style={styles.paragraph,styles.caption}>20</Paragraph>
                                    <Caption style={styles.caption}>Following</Caption>
                                 </View>
                                 <View style={styles.section}>
                                    <Paragraph style={styles.paragraph,styles.caption}>20</Paragraph>
                                    <Caption style={styles.caption}>Followers</Caption>
                                 </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem  icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                <DrawerItem icon={({color, size}) => (<Icon name="account-outline" color={color} size={size} />)}
                    label="Profile" onPress={()=>{props.navigation.navigate('Profile')}}
                />
                <DrawerItem
                    icon={({color, size}) => (<Icon name="bookmark-outline" color={color} size={size} />)}
                    label="Bookmark" onPress={()=>{props.navigation.navigate('BookMark')}}
                />
                <DrawerItem
                    icon={({color, size}) => (<Icon    name="bookmark-outline"  color={color} size={size} />)}
                    label="Setting" onPress={()=>{props.navigation.navigate('Setting')}}
                />
                  {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Setting')}}
                        /> */}
                <DrawerItem
                    icon={({color, size}) => (<Icon name="account-check-outline" color={color} size={size} />)}
                    label="Support" onPress={()=>{props.navigation.navigate('Support')}}
                />
                    </Drawer.Section>
                    <Drawer.Section title="preferences">
                           <TouchableRipple onPress={()=>{toggleTheme()}}>
                               <View style={styles.preference}>
                                   <Text>Dark Theme</Text>
                                   <View pointerEvents='none'>
                                   <Switch value={paperTheme.dark}></Switch>
                                   </View>
                               </View>
                           </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (<Icon name="exit-to-app" color={color} size={size} />)}
                    label="Sign out" onPress={()=>{signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}
export default DrawerContent;
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }

});


