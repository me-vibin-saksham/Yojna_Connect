import { View, Text, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React,{ useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native'
import {Divider} from 'react-native-elements'
import BottomTabs from '../Component/BottomTabs'
import Feather from 'react-native-vector-icons/Feather'
import { hardCodePolicy } from '../DataBase/hcPolicyData'



export const PolicyContainer = ({ title, sub_desc, description, image_1, image_2,benifits, max_age_eligibility, min_age_eligibility, other_eligibility }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={1} onPress={
            ()=>{
                navigation.navigate("PolicyPage",{
                    title,
                    sub_desc,
                    description,
                    image_1,
                    image_2,
                    benifits,
                    max_age_eligibility,
                    min_age_eligibility,
                    other_eligibility,
                })
            }
        }>
        
            <View style={{ height: 100, width: 360, backgroundColor: "#E0ECF8", borderRadius: 14, marginBottom: 15, flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ height: 100, width: 80, backgroundColor: "black", borderRadius: 12, borderWidth: 1, borderColor: "black" }} source={{ uri: image_1 }} />
                    <View style={{ marginLeft: 8, flex: 1,marginRight:6 }}>
                        <Text style={{ fontSize: 15, fontWeight: 500, marginTop: 8, marginRight: 4 }}>{title}</Text>
                        <Text style={{ fontSize: 13, fontWeight: 500, color: "grey", marginHorizontal:2, }}>{sub_desc}</Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
    );
};
