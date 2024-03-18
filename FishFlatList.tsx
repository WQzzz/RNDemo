import React from 'react';
import{
    StyleSheet,
    View,
    TextInput,
    Image,
    Text,
    FlatList,
    Button,
    Pressable
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
                <View style={{flexDirection:"row",alignItems:"flex-end"}}>
                    <Text style={{fontSize:20}}>¥</Text>
                    <Text style={styles.price}>{order.price}</Text>
                </View>
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
                <Image style={{height:20,flex:0.2,alignSelf:"center"}} source={require("./leftArrow.png")} resizeMode="contain"></Image>
                <View style={styles.searchTerm} backgroundColor="#f8f8ff">
                    <Image style={{height:15,width:15,marginRight:10}}  source={require("./search.png")} resizeMode="contain"></Image>
                    <TextInput  placeholder="搜索卖出的宝贝" ></TextInput>
                </View>
                <View style={{height:20,flex:0.2,alignItems:"center"}} >
                    <Image style={{height:15}}  source={require("./filter.png")} resizeMode="contain" ></Image>
                    <Text >筛选</Text>
                </View>
            </View>
            <Pressable style={styles.title}>
               <Text style={styles.statusBarItem}>全部</Text>
               <Text>待付款</Text>
               <Text>待发货</Text>
               <Text>待收货</Text>
               <Text>待评价</Text>
               <Text>退款中</Text>
            </Pressable>
            <View style={{flex:1}}>
                <FlatList  data={FishData} renderItem={({item}) => <Item order={item} />}></FlatList>
            </View>
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
        alignItems:"flex-start"
    },
    searchTerm:{
        flexDirection:"row",
        justifyContent:"flex-start",
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
        textDecorationStyle:"solid"
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