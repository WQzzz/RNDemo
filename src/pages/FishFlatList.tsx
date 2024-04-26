import React, { useState } from 'react';
import{
    StyleSheet,
    View,
    TextInput,
    Image,
    Text,
    FlatList,
    Button,
    Pressable,
    Alert
} from 'react-native'


const FishData=
    [{
        id:1,
        image:"https://m.media-amazon.com/images/I/61KZvrO9FGL._AC_SL1500_.jpg",
        userName:"John",
        productName:"iPhone 13 Pro",
        price:1299.99,
        status:1,
    },
    {
        id:2,
        image:"https://m.media-amazon.com/images/I/61lsexTCOhL._AC_SL1500_.jpg",
        userName:"Emily",
        productName:"MacBook Pro",
        price:1999.99,
        status:1,
    },
    {
        id:3,
        image:"https://m.media-amazon.com/images/I/51SUZRmZzOL._AC_SL1000_.jpg",
        userName:"David",
        productName:"Samsung Galaxy S21",
        price:899.99,
        status:1,
    },
    {
        id:4,
        image:"",
        userName:"用户1",
        productName:"产品1",
        price:899.99,
        status:1,
    },
    {
        id:5,
        image:"",
        userName:"用户1",
        productName:"产品1",
        price:100,
        status:1,
    },
    {
        id:6,
        image:"",
        userName:"用户1",
        productName:"产品1",
        price:100,
        status:1,
    }]

const Header=()=>{
    const [TextClicked,setTextClicked]=useState(1)
    return (
        <View  style={styles.title}>
            <Pressable onPress={()=>setTextClicked(1)}>
                    <Text key={1} style={TextClicked===1?styles.statusBarItem:""}  >全部</Text>
                    </Pressable>
                    <Pressable onPress={()=>setTextClicked(2)} >
                    <Text key={2} style={TextClicked===2?styles.statusBarItem:""} >待付款</Text>
                    </Pressable>
                    <Pressable onPress={()=>setTextClicked(3)}>
                    <Text key={3} style={TextClicked===3?styles.statusBarItem:""} >待发货</Text>
                    </Pressable>
                    <Pressable onPress={()=>setTextClicked(4)}>
                    <Text key={4} style={TextClicked===4?styles.statusBarItem:""} >待收货</Text>
                    </Pressable>
                    <Pressable onPress={()=>setTextClicked(5)}>
                    <Text key={5} style={TextClicked===5?styles.statusBarItem:""} >待评价</Text>
                    </Pressable>
                    <Pressable onPress={()=>setTextClicked(6)}>
                    <Text key={6} style={TextClicked===6?styles.statusBarItem:""} >退款中</Text>
                </Pressable>
        </View>
    )
}
  


const Item = ({order}) => (
        <View style={styles.item}>
            <View style={styles.listTitle}>
                <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                    <Image style={{height:20,width:20,borderRadius:100,marginRight:10}} source={require("./user.png")} resizeMode="contain" ></Image>
                    <Text>{order.userName}</Text>
                </View>
                <Text style={{color:"#daa520"}}>交易成功</Text>
            </View>
            <View style={styles.listContentGroup}>
                <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                    <Image style={{height:60,width:60,borderRadius:8,marginRight:10}} source={order.image?({url:order.image}):require("./image.jpg")} resizeMode="contain" ></Image>
                    <Text style={styles.productName}>{order.productName}</Text>
                </View>
                <Text style={styles.price}>¥{order.price}</Text>
            </View>
            <View style={styles.listButtonGroup}>
                <Button color="grey" title="更多" style={{margin:5}} ></Button>
                <View style={{flexDirection:"row"}} >
                    <Pressable backgroundColor="#f8f8ff" style={{justifyContent:"center",borderRadius:15,margin:5}}>
                        <Text>  联系买家  </Text>
                    </Pressable>
                    <Pressable backgroundColor="#ffd700" style={{justifyContent:"center",borderRadius:15,margin:5}}>
                        <Text>  查看评价  </Text>
                    </Pressable>
                </View>
            </View>
        </View>
        )
      
const FishFlatList=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{height:40,width:40,alignSelf:"center"}} source={require("./leftArrow.png")} resizeMode="contain"></Image>
                <View style={styles.searchTerm} backgroundColor="#f8f8ff">
                    <Image style={{height:15,width:15,marginRight:10}}  source={require("./search.png")} resizeMode="contain"></Image>
                    <TextInput style={{flex:1}}  placeholder="搜索卖出的宝贝" ></TextInput>
                </View>
                <View style={{alignItems:"center"}} >
                    <Image style={{height:15,width:15}}  source={require("./filter.png")} resizeMode="contain" ></Image>
                    <Text >筛选</Text>
                </View>
            </View>
            <Header/>
          
                <FlatList style={{flex:1}} data={FishData} renderItem={({item}) => <Item order={item} />}></FlatList>
          
        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        height:40
    },
    searchTerm:{
        flexDirection:"row",
        //justifyContent:"flex-start",
        flex:1,
        padding:8,
        borderRadius:20
    },
    title:{
        margin:8,
        flexDirection:"row",
        justifyContent:"space-evenly"

    },
    statusBarItem:{
        fontWeight:"bold",
        textShadowColor:"yellow",
        textShadowOffset:{height:10,width:10},
        textDecorationColor:"gold",
        textDecorationLine:"underline",
        textDecorationStyle:"solid",
        fontSize:16
    },
    item:{
      borderBottomWidth:0.5,
      margin:8,
      borderBottomColor:"#dcdcdc",
    },
    titleItem:{
        margin:5
    },
    listTitle:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:5,
    },
    listContentGroup:{
        flexDirection:"row",
        height:80,
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:5,
        marginRight:5
       // margin:5
    },
    listButtonGroup:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    price:{
        fontSize:20,
    },
    productName:{
        fontSize:16
    }
   

})

export default FishFlatList