import React ,{useEffect, useState} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Icon from 'react-native-vector-icons/FontAwesome'

import { 
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    Text,
    SectionList,
    Image,
    Pressable,
    TouchableHighlight
 } from "react-native";

 const axios = require('axios').default;

const PimsData=[
    {
        title:"Popular Free Lessons for English Speakers",
        data:[
            //"spanich",
            {
                key:1,
                language:"Spanish",
                image:""
            },
            {
                key:2,
                language:"French",
                image:""
            },
            {
                key:3,
                language:"Italian",
                image:""
            },
            {
                key:4,
                language:"German",
                image:""
            },
            {
                key:5,
                language:"Chinese",
                image:""
            },
        ]
    },
    {
        title:"All Free Lessons for English Speakers",
        data:[
            {
                key:6,
                language:"GerAlbanianman",
                image:""
            },
            {
                key:7,
                language:"Arabic",
                image:""
            },
            {
                key:8,
                language:"Armenian",
                image:""
            },
            {
                key:9,
                language:"Croatian",
                image:""
            },
            ]
    }
]

const Item=({item})=>{
    return(
        <View style={styles.lessonItem}>
            {/* <Image style={{width:25,height:25,borderRadius:75,marginRight:5}}source={require("./image.jpg")}></Image> */}
            <Icon name="rocket" size={30}/>
            <Text>{item.language?item.language:item.title}</Text>
        </View>
    )
}


const PimsSectionList=()=>{
    const [data,setData]= useState([])
  

    const getData=()=>
    {axios.get('https://reactnative.dev/movies.json', {   
    })
    .then(function (response) {
      let td=PimsData
      td[0].title=response.data.title;
      td[0].data=response.data.movies;
      console.log(response.data.movies)
      setData(td);
    })
    .catch(function (error:any) {
      console.log(error);
    })
    .finally(function () {
      // 总是会执行
    }); } 
  
  
    useEffect(()=>{
      getData();
    },[])



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Button title='Back' color="black"></Button>
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={styles.title}>I Want to Learn...</Text>
            </View>
            <View style={styles.list}>
                <SectionList sections={data}   renderItem={({item})=><Item item={item}/>}  
                renderSectionHeader={({section})=>(<Text style={styles.listHeader}>{section.title}</Text>)} />
            </View>
            <Pressable style={{justifyContent:"center",alignItems:"center",borderRadius:20,padding:10,marginBottom:30,marginLeft:80,marginRight:80 ,backgroundColor:"#dcdcdc"}}>
                        <Text style={{color:"grey"}}>Next</Text>
                    </Pressable>
        </SafeAreaView>
        )
}


const PimsScreen=()=>{
    return (
    <Stack.Navigator initialRouteName="MessageList" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PimsList" component={PimsSectionList} />
        {/* <Stack.Screen name="PimsItem" component={ItemDetail} /> */}
      </Stack.Navigator>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
     
    },
    header:{
        alignItems:"flex-start",
        marginLeft:15,
        marginTop:15,
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:25
    },
    list:{
       // marginLeft:20,
       flex:1
    },
    listHeader:{
        marginLeft:35,
        marginTop:10,
        alignSelf:"flex-start",
        color:"grey",
        fontWeight:"bold"
    },
    lessonItem:{
        flexDirection:"row",
        alignItems:"center",
        margin:2,
        padding:5,
        borderBottomWidth:0.5,
      borderBottomColor:"#dcdcdc",
    },
})

export { PimsSectionList,PimsScreen}