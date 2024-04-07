import { View, Text, Image } from 'react-native'
import React,{ useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native'
import {Divider} from 'react-native-elements'
import BottomTabs from '../Component/BottomTabs'

const hardcodedata =[
    {title:"My Account",
     subtitle:"Make changes to your account",
    icon:"profile",
    },
    {
        title:"My Details",
        subtitle:"write/edit your details",
        icon:"profile",
    },
    {
        title:"Face ID / Touch ID",
        subtitle:"Manage your device security",
        icon:"lock",
    },
    {
        title:"Two-Factor Authentication",
        subtitle:"Further secure your account for safety ",
        icon:"eyeo",
    },
    {
        title:"Log out",
        subtitle:"Further secure your account for safety ",
        icon:"key",
    },
]


const ProfilePage = () => {

    const navigation =useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[])

  return (
    <>
    <View style={{backgroundColor:"#eee", flex:1}}>
        <View style={{marginTop:55}}>
            <Text style={{fontSize:28, fontWeight:600, marginLeft:15,marginBottom:15}}>Profile</Text>
        </View>

        {/* profilr-icon & Top */}
        <View style={{
            height:120,
             width:380,
             marginHorizontal:15,
             backgroundColor:"#0601B4",
             borderRadius:10,
             marginBottom:25,
             }}>
            <View style={{flexDirection:"row",marginTop:18,marginLeft:20}}>
                <View style={{height:75,width:75,borderRadius:50,backgroundColor:"#eee",justifyContent:"center",alignItems:"center"}}>
                    <Image style={{height:70,width:70,borderRadius:50,}} source={{uri:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfmgvtx-8b73761b-0527-4d12-b86c-92a04631a8c9.png/v1/fill/w_1920,h_1920,q_80,strp/darth_vader__ai_art__by_3d1viner_dfmgvtx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZtZ3Z0eC04YjczNzYxYi0wNTI3LTRkMTItYjg2Yy05MmEwNDYzMWE4YzkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HpHZ9AQtqpRbJO3cAL-BUBWNaN4OhElCGiaH7QKJo8M"}}/>
                </View>

                <View style={{marginTop:8,marginLeft:14}}>
                    <Text style={{fontSize:20,marginBottom:5,color:"white"}}>User-Name</Text>
                    <Text style={{color:"#eee"}}>@Profile-Name</Text>
                </View>
                <View style={{marginTop:18,marginLeft:95}}>
                <AntDesign name='edit' size={40} color={"#eee"}/>
                </View>
            </View>
        </View>





        <ScrollView >

        {/* option-container-1 */}
        <View style={{
            backgroundColor:"white",
            borderRadius:10,
            height:420,
            width:380,
            marginHorizontal:15,
            }}>
                <View style={{marginHorizontal:25,marginVertical:30}}>
                    {hardcodedata.map((info,index)=>(
                    <View key={index}>
                    <New_section title={info.title} subtitle={info.subtitle} icon={info.icon}/>
                    </View>
                ))}
                    

                </View>

        </View>

        {/* more */}
        <View style={{marginVertical:20,marginLeft:25}}>
            <Text style={{fontSize:17}}>More</Text>
        </View>

        <View style={{
            backgroundColor:"white",
            borderRadius:10,
            height:170,
            width:380,
            marginHorizontal:15,
            }}>
                <View style={{marginHorizontal:25,marginVertical:20}}>
                <View style={{flexDirection:"row",marginBottom:20}}>
                <View style={{height:55,width:55,backgroundColor:"#f9f1fe",borderRadius:50,justifyContent:"center", alignItems:"center"}}>
                            <AntDesign size={20} color={"#36046d"} name='solution1' />
                </View>
                <View style={{marginTop:10,marginLeft:20}}>
                <Text style={{fontSize:20}}>Help & Support</Text>
                </View>
                <View style={{marginTop:13,marginLeft:90}}>
                <AntDesign name='right' size={25}/>
                </View>
                </View>

                <View style={{flexDirection:"row",marginBottom:20}}>
                <View style={{height:55,width:55,backgroundColor:"#f9f1fe",borderRadius:50,justifyContent:"center", alignItems:"center"}}>
                            <AntDesign size={20} color={"#36046d"} name='qrcode' />
                </View>
                <View style={{marginTop:10,marginLeft:20}}>
                <Text style={{fontSize:20}}>About App</Text>
                </View>
                <View style={{marginTop:13,marginLeft:130}}>
                <AntDesign name='right' size={25}/>
                </View>
                </View>
                
                
                </View>

        </View>
        
        <View style={{marginBottom:15}}></View>
        
        </ScrollView>

        <Divider width={1}/>
        <BottomTabs/>

        

        

        

    </View>
    </>
  )
}

const New_section = ({title,subtitle,icon}) => (
    <>
    <View style={{flexDirection:"row",marginBottom:20}}>
                        <View style={{height:55,width:55,backgroundColor:"#f9f1fe",borderRadius:50,justifyContent:"center", alignItems:"center"}}>
                            <AntDesign size={20} color={"#36046d"} name={icon} />
                        </View>

                        <View style={{marginTop:4,marginLeft:20}}>
                        <Text style={{fontSize:20}}>{title}</Text>
                        <Text style={{color:"grey"}}>{subtitle}</Text>
                        </View>
                    </View>

    </>
)

export default ProfilePage