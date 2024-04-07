import { View, Text, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React,{ useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native'
import {Divider} from 'react-native-elements'
import BottomTabs from '../Component/BottomTabs'
import Feather from 'react-native-vector-icons/Feather'
import { hardCodePolicy } from '../DataBase/hcPolicyData'
import { PolicyContainer } from '../Component/PolicyContainer'




export default function HomeScreen() {
    const navigation =useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[])


  return (
    <>
    <View style={{backgroundColor:"white",flex:1}}>
    <View style={{
            marginTop:55,
            marginBottom:40,
        }}>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                marginLeft:10,
                marginRight:10
            }}>
                <Image style={{
                    width:40,
                    height:40,
                    borderRadius:25,
                }}
                source={{uri:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfmgvtx-8b73761b-0527-4d12-b86c-92a04631a8c9.png/v1/fill/w_1920,h_1920,q_80,strp/darth_vader__ai_art__by_3d1viner_dfmgvtx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZtZ3Z0eC04YjczNzYxYi0wNTI3LTRkMTItYjg2Yy05MmEwNDYzMWE4YzkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HpHZ9AQtqpRbJO3cAL-BUBWNaN4OhElCGiaH7QKJo8M"}}/>
                
                {/* search-box */}
                <View style={{
                    flexDirection:'row',
                    backgroundColor:'#0601B4',
                    height:37,
                    flex:1,
                    borderRadius:25,
                    marginLeft:10,marginRight:10

                }}>
                    <Feather style={{margin:8}} name='search' size={22} color='white' />
                    <TextInput style={{color:'#E0E0E2'}} placeholder='Search' placeholderTextColor='white'/>
                    
                </View>

                {/* notification */}
                <AntDesign name='notification' size={30} color='#0601B4'/>
            </View>


            {/* carousel */}
            <ScrollView>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection:"row",marginTop:25,marginBottom:15,}}>

                        {/* loop */}
                        {Image_Data.map((info,index)=>(
                        <View key={index}>
                        <Image_Section image_url={info.image_url}/>
                        </View>
                        ))}
                        

                    </View>
                </ScrollView>


                {/* Quick-Services  */}
                <View style={{marginHorizontal:17,marginBottom:18}}>
                <Text style={{fontSize:17,fontWeight:600}}>Quick Services</Text>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-evenly",marginBottom:25}}>
                {/* loop */}
                {Image_Data2.map((inf,index)=>(
                <View key={index}>
                <Option_Scroll image_url={inf.image_url} title={inf.title} />
                </View>
                ))}
                </View>


                {/* Mike */}
                
                <View style={{marginTop:40,marginHorizontal:25,marginBottom:45}}>
                <View style={{height:50,width:360,backgroundColor:"#4fc3d0",borderRadius:25}}>
                </View>
                
                </View>
                


                
                <View style={{height:110,width:110,borderRadius:80,backgroundColor:"white",position:"absolute",top:440,left:145}}>
                <TouchableOpacity  onPress={()=>{
                    navigation.navigate("AudioNav")
                }}>
                    <Image style={{height:110,width:110,borderRadius:80,}} source={{uri:"https://image.freepik.com/free-vector/voice-recognition-ai-personal-assistant-modern-technology-visual-concept-microphone-button-icon-digital-sound-wave-audio_268834-100.jpg"}}/>
                    </TouchableOpacity>
                </View>
                

                <View style={{marginHorizontal:17,marginBottom:17}}>
                    <Text style={{fontSize:17,fontWeight:600}}>Policies
                    </Text>
                </View>


                {/* Policies-Section */}
                <View style={{marginHorizontal:25}}>
                
                {hardCodePolicy.map((ind,index)=>(
                    <View key={index}>
                    <PolicyContainer title={ind.title} sub_desc={ind.sub_desc} description={ind.description} image_1={ind.image_1} image_2={ind.image_2} benifits={ind.benifits} other_eligibility={ind.other_eligibility} max_age_eligibility={ind.max_age_eligibility} min_age_eligibility={ind.mai_age_eligibility}/>
                    
                    </View>
                ))}
                    
                </View>



                
            <View style={{marginBottom:15}}></View>
            </ScrollView>
            
        </View>
    </View>

    <Divider width={1}/>
    <BottomTabs/>
    
    </>
  )
}






 




const Image_Section =({image_url})=>(
    <>
    <View style={{height:200,width:360,backgroundColor:"red",borderRadius:15,marginHorizontal:25}}>
    <Image style={{height:200,width:360,borderRadius:10}} source={{uri:image_url}}/>
    </View>

    <View style={{marginVertical:10,justifyContent:"center", alignItems:"center"}}>
    <View style={{flexDirection:"row"}}>
        <View style={{height:10,width:10,borderRadius:10,backgroundColor:"grey",marginRight:5}}></View>
        <View style={{height:10,width:10,borderRadius:10,backgroundColor:"grey",marginRight:5}}></View>
        <View style={{height:10,width:10,borderRadius:10,backgroundColor:"grey",marginRight:5}}></View>
        <View style={{height:10,width:10,borderRadius:10,backgroundColor:"grey",marginRight:5}}></View>

    </View>
    </View>

    </>
)


const Option_Scroll = ({title,image_url}) =>(
    <>
    <View >
        <View style={{height:70,width:70,borderRadius:10,backgroundColor:"white"}}>
            <Image style={{height:70,width:70,borderRadius:10,}} source={{uri:image_url}}/>
        </View>
        <Text style={{textAlign:"center",fontWeight:500}}>{title}</Text>

    </View>
    </>
)




const Image_Data =[
    {
        image_url:"https://thumbs.dreamstime.com/b/indian-government-12559853.jpg"
    },

    {
        image_url:"https://cdn.turtlemint.com/wp-content/uploads/All-you-need-to-know-about-the-Ayushman-Bharat-Scheme-2.png"
    },

    {
        image_url:"https://images.livemint.com/img/2021/06/02/1600x900/Jitendra_Singh_Twitter_1622606554827_1622606567630.jpg"
    },

    {
        image_url:"https://mod.gov.in/sites/default/files/BR2024_1.jpeg"
    },

]

const Image_Data2 =[
    {
        title:"Health",
        image_url:"https://i.imgur.com/KwQf4tz.png",
    },

    {
        title:"Emergency",
        image_url:"https://image.shutterstock.com/image-vector/24x7-white-icon-on-magenta-260nw-445303483.jpg",
    },

    {
        title:"Utilities",
        image_url:"https://i.imgur.com/Xaf5Cey.png",
    },

    {
        title:"Education",
        image_url:"https://i.imgur.com/Qc2KnPf.png",
    },
]




