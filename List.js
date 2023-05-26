import {View,Text, TouchableOpacity, Image} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import IonIcons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const List=()=>{
    const navigation=useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })

    },[])

    const vegetables=[{
        a:"Cauliflower",
        b:"01 Pc"

    },{
        a:"Tomato",
        b:"10 Pc"
    },
{
    a:"Spinach",
    b:"1/2 Kg"
}]
const spices=[{
    a:"Coriander",
    b:"100 gram"
},
{
    a:"Mustard Oil",
    b:"1/2 litres"
}]
    return(
        <View style={{padding:15,marginTop:40}}>
            <TouchableOpacity onPress={navigation.goBack}>
                <IonIcons name="chevron-back" size={23}/>
            </TouchableOpacity>
            <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:30,fontWeight:"bold",marginTop:30}}>
                    Mashala Muglai 
                </Text>
                <Text style={{marginTop:50,marginLeft:15,backgroundColor:"green",borderRadius:8,padding:2,color:"white",paddingHorizontal:5}}>
                4.2☆
                </Text>
                
            </View>
            <View>
            <Text style={{width:240,color:"grey",fontSize:13,marginTop:15}}>
                    Mughalai Masala is a style of cookery developed in the indian subcontinent by the imperial kitchen of the Mughal Empire
                </Text>
                <View style={{flexDirection:"row",alignItems:"center",marginTop:20}}>
                <AntDesign name="clockcircleo" size={23} />
                <Text style={{marginLeft:10}}>
                    1 hour
                    </Text>
                   
                </View>
                <Image source={{
                        uri:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
                }} style={{width:90,height:90,position:"absolute",left:230,top:60,borderRadius:50}}/>
                

            </View>
            <View style={{backgroundColor:"#D3D3D3",height:2.5,marginTop:30}}>
                <Text> -
                    </Text>
            </View>
            <View style={{marginLeft:15}}>
                <Text style={{fontSize:20,fontWeight:"700",marginTop:20}}>
                    Ingredients
                </Text>
                <Text style={{color:"grey"}}>
                    For 2 people
                </Text>
                <View>
                    <Text style={{backgroundColor:"#D3D3D3" ,height:1,marginTop:15}}>
                        -
                    </Text>
                </View>
                <View style={{flexDirection:"row",marginTop:15}}>
                    <Text style={{fontWeight:"600",fontSize:16}}>
                        Vegetables (05) 
                    </Text>
                    <AntDesign name="caretdown" size={18} style={{marginLeft:10}}/>
                </View>
                <View>
                    {vegetables.map((items)=>(
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10,marginTop:5}}>
                            <Text>
                                {items.a}
                            </Text>
                            <Text>
                                {items.b}
                            </Text>
                            </View>
                    ))}
                </View>
                <View style={{flexDirection:"row",marginTop:15}}>
                    <Text style={{fontWeight:"600",fontSize:16}}>
                        Spices (10) 
                    </Text>
                    <AntDesign name="caretdown" size={18} style={{marginLeft:10}}/>
                </View>
                <View>
                    {spices.map((items)=>(
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10,marginTop:5}}>
                            <Text>
                                {items.a}
                            </Text>
                            <Text>
                                {items.b}
                            </Text>
                            </View>
                    ))}
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{fontSize:20,fontWeight:"700"}}>
                        Appliances
                    </Text>
                    <View style={{flexDirection:"row"}}>
                    <MaterialCommunityIcons name="fridge-outline" size={40} style={{backgroundColor:"#D3D3D3",marginLeft:20,borderRadius:6,paddingVertical:5}}/>
                    <MaterialCommunityIcons name="fridge-outline" size={40} style={{backgroundColor:"#D3D3D3",marginLeft:20,borderRadius:6,paddingVertical:5}}/>
                    <MaterialCommunityIcons name="fridge-outline" size={40} style={{backgroundColor:"#D3D3D3",marginLeft:20,borderRadius:6,paddingVertical:5}}/>

                    </View>
                    
                </View>
                    
            </View>
            
           
        </View>
    )
}
export default List