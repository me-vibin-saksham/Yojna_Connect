import { View, Text, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React,{ useLayoutEffect , useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native'
import {Divider} from 'react-native-elements'
import BottomTabs from '../Component/BottomTabs'
import Feather from 'react-native-vector-icons/Feather'


const FormPage = () => {

    const navigation =useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle: 'Bio Data',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#eee',
            },
        })
    },[])

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [state, setState] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [familyIncome, setFamilyIncome] = useState('');

    const handleSubmit = () => {
        // Perform actions with the stored user details
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Phone Number:', phoneNumber);
        console.log('Gender:', gender);
        console.log('DOB:', dob);
        console.log('State:', state);
        console.log('City:', city);
        console.log('Pincode:', pincode);
        console.log('Age:', age);
        console.log('Family Income:', familyIncome);

        
    };

  return (
    <ScrollView>
    <View style={{backgroundColor:"#eee",flex:1,}}>
      <View style={{marginTop:35,alignItems:"center"}}>
        <View style={{height:100,width:100,backgroundColor:"black",borderRadius:100}}>
        <Image style={{height:100,width:100,borderRadius:10,}} source={{uri:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfmgvtx-8b73761b-0527-4d12-b86c-92a04631a8c9.png/v1/fill/w_1920,h_1920,q_80,strp/darth_vader__ai_art__by_3d1viner_dfmgvtx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZtZ3Z0eC04YjczNzYxYi0wNTI3LTRkMTItYjg2Yy05MmEwNDYzMWE4YzkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HpHZ9AQtqpRbJO3cAL-BUBWNaN4OhElCGiaH7QKJo8M"}}/>
        <View>
            <Text style={{textAlign:"center",fontSize:17,marginTop:8}}>User-Name</Text>
            <Text style={{textAlign:"center",color:"grey"}}>@Profile-Name</Text>
        </View>
        </View>

        {/* fileds */}
        <View style={{height:50,width:350,backgroundColor:"white",marginTop:90,borderRadius:5,marginBottom:20}}>
        <TextInput value={firstName} onChangeText={setFirstName} style={{color:'black',fontSize:20,marginTop:9,marginLeft:10}} placeholder="what's your First Name?" placeholderTextColor='grey'/>
        <View style={{backgroundColor:"black",height:2,width:350,marginTop:12}}></View>
        </View>

        <View style={{height:50,width:350,backgroundColor:"white",borderRadius:5,marginBottom:20}}>
        <TextInput value={lastName} onChangeText={setLastName} style={{color:'black',fontSize:20,marginTop:9,marginLeft:10}} placeholder="what's your Last Name?" placeholderTextColor='grey'/>
        <View style={{backgroundColor:"black",height:2,width:350,marginTop:12}}></View>
        </View>

        <View style={{height:50,width:350,backgroundColor:"white",borderRadius:5,marginBottom:20}}>
        <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:25,marginTop:6,marginLeft:8}}>+91 |</Text>
        <TextInput value={phoneNumber} onChangeText={setPhoneNumber} style={{color:'black',fontSize:20,marginTop:9,marginLeft:7}} placeholder="Phone Number" placeholderTextColor='grey'/>
        </View>
        <View style={{backgroundColor:"black",height:2,width:350,marginTop:12}}></View>
        </View>

        <View style={{height:50,width:350,backgroundColor:"white",borderRadius:5,marginBottom:20}}>
        <TextInput value={age} onChangeText={setAge} style={{color:'black',fontSize:20,marginTop:9,marginLeft:10}} placeholder="what's your Age?" placeholderTextColor='grey'/>
        <View style={{backgroundColor:"black",height:2,width:350,marginTop:12}}></View>
        </View>

        <View style={{height:50,width:350,backgroundColor:"white",borderRadius:5,marginBottom:20}}>
        <TextInput value={gender} onChangeText={setGender} style={{color:'black',fontSize:20,marginTop:9,marginLeft:10}} placeholder="Enter your Gender .. (Male/Female)" placeholderTextColor='grey'/>
        <View style={{backgroundColor:"black",height:2,width:350,marginTop:12}}></View>
        </View>

        <View style={{height:50,width:350,backgroundColor:"white",borderRadius:5,marginBottom:20}}>
        <TextInput value={dob} onChangeText={setDob} style={{color:'black',fontSize:20,marginTop:9,marginLeft:10}} placeholder="DOB .. (in DD/MM/YYYY)" placeholderTextColor='grey'/>
        <View style={{backgroundColor:"black",height:2,width:350,marginTop:12}}></View>
        </View>

        <View style={{height:50,width:350,backgroundColor:"white",borderRadius:5,marginBottom:20}}>
        <TextInput value={state} onChangeText={setState} style={{color:'black',fontSize:20,marginTop:9,marginLeft:10}} placeholder="State" placeholderTextColor='grey'/>
        <View style={{backgroundColor:"black",height:2,width:350,marginTop:12}}></View>
        </View>

        <View style={{height:50,width:350,backgroundColor:"white",borderRadius:5,marginBottom:20}}>
        <TextInput value={city} onChangeText={setCity} style={{color:'black',fontSize:20,marginTop:9,marginLeft:10}} placeholder="City" placeholderTextColor='grey'/>
        <View style={{backgroundColor:"black",height:2,width:350,marginTop:12}}></View>
        </View>

        <View style={{height:50,width:350,backgroundColor:"white",borderRadius:5,marginBottom:20}}>
        <TextInput value={pincode} onChangeText={setPincode} style={{color:'black',fontSize:20,marginTop:9,marginLeft:10}} placeholder="Pincode" placeholderTextColor='grey'/>
        <View style={{backgroundColor:"black",height:2,width:350,marginTop:12}}></View>
        </View>

        <View style={{height:50,width:350,backgroundColor:"white",borderRadius:5,marginBottom:20}}>
        <TextInput value={familyIncome} onChangeText={setFamilyIncome} style={{color:'black',fontSize:20,marginTop:9,marginLeft:10}} placeholder="Family Income" placeholderTextColor='grey'/>
        <View style={{backgroundColor:"black",height:2,width:350,marginTop:12}}></View>
        </View>

        <TouchableOpacity onPress={()=>{
            handleSubmit
            navigation.navigate("FilteredSchemes",{age,familyIncome})
        }}>
        <View>
            <View style={{height:50,width:250,backgroundColor:"blue",borderRadius:5,marginTop:40}}>
                <Text style={{fontSize:20,textAlign:"center",marginTop:10,color:"white",fontWeight:500}}>Submit Details</Text>
            </View>
        </View>
        </TouchableOpacity>

      </View>
    </View>
    <View style={{marginBottom:15}}></View>
    </ScrollView>
  )
}

export default FormPage