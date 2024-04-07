import { View, Text, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React,{ useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native'
import {Divider} from 'react-native-elements'
import BottomTabs from '../Component/BottomTabs'
import Feather from 'react-native-vector-icons/Feather'
import { useRoute } from '@react-navigation/native'
import { hardCodePolicy } from '../DataBase/hcPolicyData'
import { PolicyContainer } from '../Component/PolicyContainer'

const FilteredSchesmes = () => {

    const navigation =useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle: 'Schemes Relevent to you',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: 'white',
            },
        })
    },[])

    const {params:{age,familyIncome}} = useRoute();
    const filteredPolicies = hardCodePolicy.filter(policy => policy.max_age_eligibility >= age && policy.mai_age_eligibility <= age);
    console.log(filteredPolicies)



  return (
    <>
    <View style={{backgroundColor:"white",flex:1,}}>
        <View style={{marginTop:25,}}> 

        <View style={{alignSelf:"center"}}>  
        {filteredPolicies.map((policy,index)=>(
            <View key={index}>
                <PolicyContainer title={policy.title} sub_desc={policy.sub_desc} description={policy.description} image_1={policy.image_1} image_2={policy.image_2} benifits={policy.benifits} other_eligibility={policy.other_eligibility} max_age_eligibility={policy.max_age_eligibility} min_age_eligibility={policy.mai_age_eligibility} />
            </View>
        ))}
        </View> 
        </View>
    </View>

    <Divider width={1}/>
        <BottomTabs/>
    </>
  )
}

export default FilteredSchesmes


