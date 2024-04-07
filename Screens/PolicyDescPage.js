import { View, Text, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React,{ useLayoutEffect  } from 'react'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native'
import {Divider} from 'react-native-elements'
import BottomTabs from '../Component/BottomTabs'
import Feather from 'react-native-vector-icons/Feather'

const PolicyDescPage = () => {
    const navigation =useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[])

    const {
        params:{title,
        sub_desc,
        description,
        image_1,
        image_2,
        benifits,
        max_age_eligibility,
        min_age_eligibility,
        other_eligibility,} } = useRoute();


  return (
    <>
    <ScrollView>
    <View style={{flex:1,backgroundColor:"#eee"}}>
      <View>
        <Image style={{height:300,width:412,borderRadius:15}} source={{uri:image_2}}/>

        {/* logo-Image & Text */}
        <View style={{height:100,width:100,borderRadius:12,backgroundColor:"black",position:"absolute",top:250,left:155}}>
            <Image style={{height:100,width:100,borderRadius:12,borderWidth:2.5,borderColor:"black"}} source={{uri:image_1}}/>
        </View>

        <View style={{marginTop:55,justifyContent:"center",alignItems:"center",marginHorizontal:15}}>
            <Text style={{fontSize:22,fontWeight:500,textAlign:"center"}}>{title}</Text>
        </View>

        {/* Description */}
        <View style={{marginTop:20,marginLeft:15,marginRight:10}}>
            <Text style={{fontSize:16,fontWeight:500,marginBottom:10}}>Description:</Text>
            <Text>{description}</Text>
        </View>

        {/* Benifits */}
        <View style={{marginTop:20,marginLeft:15,marginRight:10}}>
            <Text style={{fontSize:16,fontWeight:500,marginBottom:10}}>Benefits:</Text>
            <Text>{benifits}</Text>
        </View>

        {/* max-age & min-age eligibility */}
        <View style={{marginTop:20,marginLeft:15,marginRight:10}}>
            <Text style={{fontSize:16,fontWeight:500,marginBottom:10}}>Max Age Eligibility:</Text>
            <Text>{max_age_eligibility} years</Text>
        </View>
        <View style={{marginTop:20,marginLeft:15,marginRight:10}}>
            <Text style={{fontSize:16,fontWeight:500,marginBottom:10}}>Max Age Eligibility:</Text>
            <Text>{min_age_eligibility} years</Text>
        </View>

        <View style={{marginBottom:20}}></View>

        {/* Eligibilty-Chriterias */}
        <View style={{marginTop:20,marginLeft:15,marginRight:10,marginBottom:10}}>
            <Text style={{fontSize:16,fontWeight:500,marginBottom:10}}>Eligibility:</Text>
            <Text>{other_eligibility}</Text>
        </View>


      </View>
    </View>
    
    {/* Apply-Button */}
    <View style={{justifyContent:"center",alignItems:"center",marginBottom:10}}>
        <View style={{height:50,width:320,backgroundColor:"#8B0000",flexDirection:"row"}}>
            <Text style={{color:"white",fontSize:21,fontWeight:500,marginTop:6,marginLeft:90}} >Apply Now</Text>
            <View style={{height:50,width:50,borderWidth:2,borderColor:"#CE2029",marginLeft:79,justifyContent:"center",alignItems:"center"}}>
                <AntDesign name='doubleright' size={24} color={"white"} />

            </View>


        </View>
    </View>

    </ScrollView>

    <Divider width={1}/>
    <BottomTabs/>
    </>
  )
}

export default PolicyDescPage