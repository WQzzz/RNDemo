import React from 'react'

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
// const PimsData=[
//     {
//         title:"Popular Free Lessons for English Speakers",
//         data:[
//           "Spanish",
//           "French",
//           "Italian",
//           "German",
//           "Chinese",
//         ]
//     },
//     {
//         title:"All Free Lessons for English Speakers",
//         data:["GerAlbanianman","Arabic",
//             ]
//     }
// ]

const Item=({item})=>{
    return(
        <View style={styles.lessonItem}>
            <Image style={{width:25,height:25,borderRadius:75,marginRight:5}}source={require("./image.jpg")}></Image>
            <Text>{item.language}</Text>
        </View>
    )
}


const PimsSectionList=()=>{
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Button title='Back' color="black"></Button>
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={styles.title}>I Want to Learn...</Text>
            </View>
            <View style={styles.list}>
                <SectionList sections={PimsData}   renderItem={({item})=><Item item={item}/>}  
                renderSectionHeader={({section})=>(<Text style={styles.listHeader}>{section.title}</Text>)} />
            </View>
            <Pressable backgroundColor="#dcdcdc" style={{justifyContent:"center",alignItems:"center",borderRadius:20,padding:10,marginBottom:30,marginLeft:80,marginRight:80}}>
                        <Text style={{color:"grey"}}>Next</Text>
                    </Pressable>
        </SafeAreaView>
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

export default PimsSectionList