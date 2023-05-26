import {View,Text,SafeAreaView} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Categories from "./Categories";
import CategoriesCard from "./CategoriesCard";
import AntDesign from "react-native-vector-icons/AntDesign"

const HomeScreen=()=>{
    const navigation=useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:"Select Dishes",
            headerShown:false
        })

    },[])
    const cuisine=[{
        a:"Italian",
        b:"color"

    },
{
    a:"Italian"
},{
a:"Indian"
},{
    a:"Indian"
}]
    return(
        <SafeAreaView style={{padding:13,marginTop:30}}>
               <View>
                <View style={{flexDirection:"row",alignItems:"center"}}>
            <IonIcons name="chevron-back" size={23}/>
            <Text style={{fontWeight:"600",fontSize:20,marginLeft:20}}>
                Select Dishes
            </Text>
            </View>
            <View style={{backgroundColor:"black",padding:15,marginTop:10}}>
                <Text>-</Text>
                
            </View>
            <View style={{padding:20,backgroundColor:"white",borderRadius:20,position:"absolute",flexDirection:"row",marginLeft:20,top:60,borderWidth:1,borderColor:"#D3D3D3"}}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <MaterialIcons name="calendar-month-outline" size={23}/>
                    <Text style={{fontWeight:"700"}}>
                        21 May 2021
                    </Text>


                </View>
                <View>
                    <Text style={{color:"grey"}}>
                        |
                    </Text>
                    </View>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <MaterialIcons name="alarm" size={23}/>
                    <Text style={{fontWeight:"700"}}>
                        10:30 Pm-12:30 Pm
                    </Text>

                </View>
            </View>
            <View style={{display:"flex",flexDirection:"row",marginTop:60,justifyContent:"space-between",alignItems:"center"}}>

                {cuisine.map((item)=>
                item.b?(
                    <Text style={{color:"red",borderWidth:1,borderColor:"orange",borderRadius:20,paddingHorizontal:15,padding:5,backgroundColor:"#FFFFE0"}}>
                        {item.a}
                    </Text>

                ):(
                    <View>
                    <Text style={{borderRadius:20,borderWidth:1,borderColor:"grey",padding:5,paddingHorizontal:15}}>
                        {item.a}
                    </Text>
                    </View>

                )
                
                   

                

                
                   
                )}

            </View>
            
            
            

        </View>
        <Categories/>
        <CategoriesCard/>
        
        </SafeAreaView>
     
    )
}
export default HomeScreen;