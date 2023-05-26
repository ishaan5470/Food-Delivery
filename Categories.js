import {View,Text,ScrollView,Image} from "react-native";
import React from "react";
const Categories=()=>{
    const img=[
        {
            a:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",

        },
        {
            a:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
            b:"color"
        },
        {
            a:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
            b:"color"
        },
        {
            a:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
            b:"color"
        },
        {
            a:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
            b:"color"
        }
    ]
    return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{padding:10}}>
        <View>
        <Image source={{
        uri:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
      }} style={{height:70,width:70,borderRadius:50,margin:10}}/>
      <Text style={{position:"absolute",left:24,top:32,color:"white",fontWeight:"800"}}>
        Biryani
        </Text>
        </View>
        <View>
        <Image source={{
        uri:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
      }} style={{height:70,width:70,borderRadius:50,margin:10,borderWidth:2,borderColor:"orange"}}/>
      <Text style={{position:"absolute",left:24,top:32,color:"white",fontWeight:"800"}}>
        Biryani
        </Text>

        </View>
        <View>
        <Image source={{
        uri:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
      }} style={{height:70,width:70,borderRadius:50,margin:10,borderWidth:2,borderColor:"orange"}}/>
        <Text style={{position:"absolute",left:24,top:32,color:"white",fontWeight:"800"}}>
        Biryani
        </Text>
            </View>
 
     
     <View>
     <Image source={{
        uri:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
      }} style={{height:70,width:70,borderRadius:50,margin:10,borderWidth:2,borderColor:"orange"}}/>
      <Text style={{position:"absolute",left:24,top:32,color:"white",fontWeight:"800"}}>
        Biryani
        </Text>
        </View>
        <View>
     <Image source={{
        uri:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
      }} style={{height:70,width:70,borderRadius:50,margin:10,borderWidth:2,borderColor:"orange"}}/>
      <Text style={{position:"absolute",left:24,top:32,color:"white",fontWeight:"800"}}>
        Biryani
        </Text>
        </View>
        <View>
     <Image source={{
        uri:"https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
      }} style={{height:70,width:70,borderRadius:50,margin:10,borderWidth:2,borderColor:"orange"}}/>
      <Text style={{position:"absolute",left:24,top:32,color:"white",fontWeight:"800"}}>
        Biryani
        </Text>
        </View>
     
    
     
      


    </ScrollView>
    )
}
export default Categories;