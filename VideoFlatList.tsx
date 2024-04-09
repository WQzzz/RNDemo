import React from 'react'
import { 
    SafeAreaView,
    StyleSheet,
    Image, Pressable,
    View,
    FlatList,Text
 } from 'react-native'

 const VideoData=[ {
    title:"【Taylor Swift】Taylor Swift Songs Playlist 2024 ~ Taylor Swift Greatest Hits",
    image:"https://i.ytimg.com/vi/OU10pIY2rAQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5ENLdXc2biQbws_HX6PMGezkZpQ",
    time:"2022年7月19日",
    playAmount:523,
    popupAmount:22
 },
 {
    title:"【HOT】Miley Cyrus, Ed Sheeran, Miley Cyrus, Maroon 5, Rihanna, Bruno Mars, Adele 💖 Pop En Inglés 2024",
    image:"https://i.ytimg.com/vi/gD7nKALsOP4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC93Rk0v0mlZLKumnVCoCQ1ik9Nyw",
    time:"2022年7月19日",
    playAmount:523,
    popupAmount:22
 },
 {
    title:"【Music】Relaxing Music to Relieve Stress, Anxiety & Depression 🐬 Mind, Body & Soul Healing",
    image:"https://i.ytimg.com/vi/rb7zDa6uTnk/hq720_live.jpg?sqp=CPig6q8G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD19R7G0svFW5tc7UlceM-jga9OEQ",
    time:"2022年7月19日",
    playAmount:523,
    popupAmount:22
 },{
    title:"【iphone13pro远峰蓝】开箱视频",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNol1uY1hiXbEzExoY48cZIo_sn7cEqmqq3Q&usqp=CAU",
    time:"2022年7月19日",
    playAmount:523,
    popupAmount:22
 },
 {
    title:"【人类珍贵影像】祝我们都有光明的未来",
    image:"https://static.aicoinstorge.com/attachment/article/20230614/168671344559716.jpg",
    time:"2022年7月19日",
    playAmount:523,
    popupAmount:22
 },
 {
    title:"【毕业快乐】祝我们都有光明的未来",
    image:"https://static.aicoinstorge.com/attachment/article/20230614/168671344559716.jpg",
    time:"2022年7月19日",
    playAmount:523,
    popupAmount:22
 },
 {
    title:"【人类珍贵影像】祝我们都有光明的未来",
    image:"https://static.aicoinstorge.com/attachment/article/20230614/168671344559716.jpg",
    time:"2022年7月19日",
    playAmount:523,
    popupAmount:22
 },
 {
    title:"【毕业快乐】祝我们都有光明的未来",
    image:"https://static.aicoinstorge.com/attachment/article/20230614/168671344559716.jpg",
    time:"2022年7月19日",
    playAmount:523,
    popupAmount:22
 },
]


 const Item=({video})=>{
    return(
        <View style={styles.item}>
            <Image style={{flex:3,borderRadius:5}} source={{url:video.image}} resizeMode="cover"/>
            <View style={{flex:5,justifyContent:"space-between",marginLeft:10}}>
                <View style={styles.videoTitle}> 
                    <Text numberOfLines={2} ellipsisMode="tail" style={{fontSize:14}}>{video.title}</Text>
                </View>
                <View style={{flex:1,justifyContent:"flex-end"}}>
                    <View style={styles.videoTime}>  
                        <Text style={{fontSize:13,color:"grey"}}>{video.time}</Text>
                    </View>
                    <View style={styles.itemData}>
                        <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                          <Image style={{height:13,width:13,marginRight:3}} source={require("./play.png")} resizeMode="contain"></Image>
                         <Text style={{fontSize:13,color:"grey"}}>{video.playAmount}</Text>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                            <Image style={{height:13,width:13,marginRight:3}} source={require("./popup.png")} resizeMode="contain"></Image>
                            <Text style={{fontSize:13,color:"grey"}}>{video.popupAmount}</Text>
                        </View>
                        <Image style={{height:13,width:13}} source={require("./ellipsis.png")} resizeMode="contain"/>
                    </View>
                   
                </View>
            </View>
        </View>
    )
 }

const VideoFlatList=()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.header}>
                <Image style={{width:20,height:20}} source={require("./leftArrow.png")} resizeMode="contain"></Image>
                <Pressable style={{backgroundColor:"#ffecf0",flexDirection:"row",borderRadius:35,alignItems:"center",paddingRight:5,paddingTop:1,paddingBottom:1,marginLeft:30}}>
                    <Image style={{width:25,height:25,borderRadius:35}} source={require("./image.jpg")} resizeMode="contain" ></Image>
                    <Image style={{width:15,height:15,marginLeft:1,marginRight:2}} source={require("./pinkPlus.png")} resizeMode="contain" />
                    <Text style={{color:"#fc689a",height:15}}>关注</Text>
                </Pressable>
                <View style={{flexDirection:"row"}}>
                    <Image style={{width:20,height:20,marginRight:20}} source={require("./search.png")} resizeMode="contain"/>
                    <Image style={{width:20,height:20}} source={require("./ellipsis.png")} resizeMode="contain"/>
                </View>
            </View>
            <View style={styles.selectBar}>
                <Text>主页</Text>
                <Text>动态</Text>
                <Text>投稿</Text>
            </View>
            <View style={{flex:1}}>
                <FlatList data={VideoData} renderItem={({item})=><Item video={item}/>}></FlatList>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    header:{
        flexDirection:"row",
        maxHeight:50,
        alignItems:"center",
        justifyContent:"space-between",
        padding:10,
        borderBottomColor:"#dcdcdc",
        borderBottomWidth:1
    },
    selectBar:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10,
        borderBottomColor:"#dcdcdc",
        borderBottomWidth:1
    },
    item:{
        flexDirection:"row",
        //margin:10,
        borderBottomWidth:1,
        borderBottomColor:"#dcdcdc",
        padding:10,
        minHeight:100

    },
    videoTitle:{
        flex:1,
        fontSize:20
    },
    videoTime:{
       marginBottom:2
    },
    itemData:{
        flexDirection:"row",
        fontSize:10,
        color:"grey",
        justifyContent:"space-between",
        alignItems:"flex-end",
        marginLeft:2
    }
})

export default VideoFlatList