import {View,Text, ScrollView, ImageBase,Image, TouchableOpacity} from "react-native";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import IonIcons from "react-native-vector-icons/Ionicons";
const CategoriesCard=()=>{
    const navigation=useNavigation();
    const matter=[{
        name:"Masala Mughalai",
        rating:"4.2☆",
        description:"Chicken fried in deep tomato sauce with delicious spices",
        equipments:["Refrigerator", "Microwave"],
        image:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
        veg:"dot-single",
        fridge:"fridge-outline",
        oven:"toaster-oven",
        list:"View list"
        
     },
    {
        name:"Masala Paneer",
        rating:"4.3☆",
        description:"Paneer tossed in gravy",
        equipments:["Refrigerator","Microwave"],
        image:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
        veg:"dot-single",
        oven:"toaster-oven",
        list:"View list",





    },
{
    name:"Masala Paneer",
        rating:"4.3☆",
        description:"Paneer tossed in gravy",
        equipments:["Refrigerator","Microwave"],
        image:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
        veg:"dot-single",
        oven:"toaster-oven",
        list:"View list",
}]








    return(
        <View style={{marginTop:20}}>
            <Text style={{backgroundColor:"#D3D3D3",height:3}}>
              -
            </Text>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center",padding:10}}>
                <Text style={{fontWeight:"bold",fontSize:20}}>
                    Recommended
                </Text>
                <MaterialIcon name="arrow-drop-down" size={30}/>
                <View>
                    <Text style={{left:80,backgroundColor:"black",borderRadius:20,color:"white",paddingHorizontal:15,padding:4,fontWeight:"bold",shadowColor:"grey",shadowOpacity:1,shadowRadius:3,shadowOffset: {width: 5, height: 4},}}>
                        Menu
                    </Text>
                </View>
                <View style={{position:"absolute",alignItems:"center"}}>
                    
                <Text style={{backgroundColor:"black",color:"white",borderRadius:6,paddingHorizontal:15,paddingVertical:8,top:370,left:65}}>
                <IonIcons name="fast-food-outline" size={18}/>
                    3 food item selected
                    <AntDesign name="arrowright" size={18} style={{marginLeft:5}}/>
                   
                    
                </Text>
            </View>
            </View>
            <View style={{overflow:"scroll"}}>
                {matter.map((items)=>(
                    <View style={{overflow:"scroll"}}>
                         <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <Text>
                            {items.name}
                            
                        </Text>
                        <Entypo name={items.veg} size={40} color="green"/>
                        <Text style={{backgroundColor:"green",borderRadius:8,padding:2,color:"white",paddingHorizontal:5}}>
                            {items.rating}
                        </Text>


                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <MaterialCommunityIcons name={items.fridge} size={25}/>
                        <Text style={{fontSize:10}}>
                            Refrigerator

                        </Text>
                        <MaterialCommunityIcons name={items.oven} size={25}/>
                        <Text style={{fontSize:10}}> 
                            Microwave
                            </Text>
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate("List")
                            }} style={{flexDirection:"row",alignItems:"center",marginLeft:5}}>
                            <Text style={{fontSize:11,color:"orange",fontWeight:"600"}}>
                                {items.list}
                            </Text>
                            <AntDesign name="right" size={15} color="orange"/>
                        </TouchableOpacity>

                        </View>
                      
                        <View>
                            <Text style={{width:180}}>
                                {items.description}
                            </Text>
                              
                        </View>
                        <View style={{left:230,bottom:80}}>
                            <Image source={{
                                uri:items.image
                            }} style={{width:90,height:90,borderRadius:10}}/>
                            <Text style={{position:"absolute",backgroundColor:"white",borderRadius:6,paddingHorizontal:10,top:80,left:20,borderWidth:1,borderColor:"orange",padding:3,color:"orange",fontWeight:"600"}}>
                                Add +
                                </Text>
                        </View>
                        <View style={{backgroundColor:"#D3D3D3", height:2}}>
                            <Text>
                                
                                </Text>
                        </View>
                      
                    </View>
                    
                   
                
                ))}
               
              
            </View>
            
        </View>
    )
}
export default CategoriesCard;