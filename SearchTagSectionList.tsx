import React, { useState } from "react"
import { 
    SafeAreaView,
    SectionList ,
    View,
    Text,
    StyleSheet,
    Pressable
} from "react-native"


const Data=[{
    title:"Categories",
    data:[["Conversation Skills","Culture","Grammar","Language Learning Tips"]]
},
{
    title:"Keywords",
    data:[["Arts","Entertainment","Slang","Travel"]]
},
{
    title:"Status",
    data:[["Unplayed","In progress","Played","Downloaded"]]
}]

const Item=({item})=>{
    const [clicked,setClicked]=useState(false)
    return ( 
    <Pressable style={clicked?styles.itemClicked:styles.item}  onPress={()=>setClicked(!clicked)}>
        <Text style={{color:clicked?"blue":"grey"}}>{item}</Text>
    </Pressable>
)
}

const Items=({items})=>{
    const itemList=items.map(item=><Item key={item} item={item}/>)
    return(
        <View  style={{flexDirection:"row",flexWrap:"wrap"}}>{itemList}</View>
    )
}

const SearchTagSectionList=()=>{
    return (
        <SafeAreaView  style={{flex:1}}>
            <SectionList style={{flex:1,margin:20}}  sections={Data} 
                renderItem={({item})=><Items items={item}/>}  
                renderSectionHeader={({section})=><Text style={{marginTop:10,marginBottom:10}}>{section.title}</Text>} 
                 />   
            
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    item:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        margin:5,
        borderWidth:1,
        borderColor:"grey",
        borderRadius:50,
        alignSelf: "flex-start",
    },
    itemClicked:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        margin:5,
        borderWidth:1,
        borderColor:"blue",
        borderRadius:50,
        backgroundColor:"#e6e6fa",
        alignSelf: "flex-start",
    }
})

export default SearchTagSectionList