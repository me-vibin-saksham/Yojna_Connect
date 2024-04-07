import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';



export default function BottomTabs() {

    const navigation =useNavigation();
  return (
    <View style={{backgroundColor:"white"}}>
    <View style={{marginHorizontal:25,marginVertical:8,}}>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>

        {/* Home-Tab */}
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("Home");
        }}
        >
        <View>
            <AntDesign name="home" size={25} color={"black"} style={{marginLeft:5}}/>
            <Text>Home</Text>
        </View>
        </TouchableOpacity>

        {/* Search-Tab */}
        <View>
            <AntDesign name="search1" size={25} color={"black"} style={{marginLeft:5}}/>
            <Text>Search</Text>
        </View>


        {/* Chat-Tab */}
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Chat");
        }}>
        <View>
            <MaterialCommunityIcons name="chat-outline" size={26} color={"black"} style={{marginLeft:2}}/>
            <Text>Chat</Text>
        </View>
        </TouchableOpacity>


        {/* Policies-Tab */}
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Forms");
        }}>
        <View>
            <SimpleLineIcons name="docs" size={25} color={"black"} style={{marginLeft:9}}/>
            <Text>Policies</Text>
        </View>
        </TouchableOpacity>


        {/* Profile-Tab */}
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate("Profile");
        }}>
        <View>
            <AntDesign name="profile" size={25} color={"black"} style={{marginLeft:5}}/>
            <Text>Profile</Text>
        </View>
        </TouchableOpacity>
        

      </View>
    </View>
    </View>
  )
}