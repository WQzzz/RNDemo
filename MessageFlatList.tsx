import React, {useState, useEffect} from 'react';
import {BSON, ObjectSchema, Realm} from 'realm';
import {initial} from './src/features/messageData/messageDataSlice';
import {
  SafeAreaView,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
  Switch,
} from 'react-native';

import {RealmProvider, useObject, useQuery, useRealm} from '@realm/react';
import 'react-native-get-random-values';
export class Message extends Realm.Object<Message> {
  _id!: BSON.ObjectId;
  content!: string;
  title!: string;
  time!: string;

  static schema: ObjectSchema = {
    name: 'message',
    properties: {
      _id: 'objectId',
      title: {type: 'string', indexed: true},
      time: {type: 'string', indexed: true},
      content: {type: 'string', indexed: true},
    },
    primaryKey: '_id',
  };
}

import Icon from 'react-native-vector-icons/AntDesign';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const MessageData = [
  {
    key: 1,
    image: '',
    title: '中国移动',
    time: '昨天19:24',
    content:
      '筑牢反邪防线，共建和谐社会。坚决防范打击邪教组织违法活动，发现相关线索请及时拨打110报',
  },
  {
    key: 2,
    image: '',
    title: '中国移动',
    time: '昨天19:24',
    content:
      '筑牢反邪防线，共建和谐社会。坚决防范打击邪教组织违法活动，发现相关线索请及时拨打110报',
  },
  {
    key: 3,
    image: '',
    title: 'vivo钱包',
    time: '昨天19:24',
    content: '恭喜您获得移动流量礼包＞>',
  },
  {
    key: 4,
    image: '',
    title: '滴滴出行',
    time: '昨天09:13',
    content:
      '【滴滴出行】滴滴羊毛薅起来！打车只要65折，去領券https://c.didi.cn/UfI5Cxx拒收请回复R',
  },
  {
    key: 5,
    image: '',
    title: '中国移动',
    time: '昨天19:24',
    content:
      '筑牢反邪防线，共建和谐社会。坚决防范打击邪教组织违法活动，发现相关线索请及时拨打110报',
  },
  {
    key: 6,
    image: '',
    title: '中国移动',
    time: '昨天19:24',
    content:
      '筑牢反邪防线，共建和谐社会。坚决防范打击邪教组织违法活动，发现相关线索请及时拨打110报',
  },
  {
    key: 7,
    image: '',
    title: '中国移动',
    time: '昨天19:24',
    content:
      '筑牢反邪防线，共建和谐社会。坚决防范打击邪教组织违法活动，发现相关线索请及时拨打110报',
  },
  {
    key: 8,
    image: '',
    title: '中国移动',
    time: '昨天19:24',
    content:
      '筑牢反邪防线，共建和谐社会。坚决防范打击邪教组织违法活动，发现相关线索请及时拨打110报',
  },
];

const ItemDetail = ({route}) => {
  const navigation = useNavigation();
  const {item} = route.params;
  return (
    <View style={{margin: 10}}>
      <Text>{item.title}</Text>
      <Text>{item.time}</Text>
      <Text>{item.content}</Text>
      <Button
        title="go back"
        onPress={() => {
          navigation.goBack();
        }}></Button>
    </View>
  );
};

const RenderItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('MessageItem', {item});
      }}>
      <View style={styles.messageItem}>
        {/* <Image
        source={require('./user.png')}
        resizeMode="contain"
        style={{height: 30, width: 30, borderRadius: 20, marginRight: 10}}
      /> */}
        <Icon name="mail" size={30} />
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginBottom: 2}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                {item.title}
              </Text>
            </View>
            <View>
              <Text style={{color: 'grey', fontSize: 12}}>{item.time??item.releaseYear}</Text>
            </View>
          </View>
          <Text style={{color: 'grey'}} numberOfLines={2} ellipsizeMode="tail">
            {item.content??item.title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const MessageFlatList = () => {
  const dispatch = useDispatch();
  let data = useQuery(Message);

  const realm = useRealm();
  const handleAddMessage = () => {
    console.log('message added');
    realm.write(() => {
      realm.create('message', {
        _id: new BSON.ObjectId(),
        title: 'vivo钱包',
        content: '恭喜您获得移动流量礼包＞>',
        time: '昨天19:24',
      });
    });
  };

  let ApidData=useSelector((state)=>state.messageData)

  useEffect(() => {
    getMoviesFromApi();
  }, []);

  const getMoviesFromApi = () => {
    return fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        dispatch(initial(json.movies));
        console.log('dispatched');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>信息</Text>
        <Pressable style={styles.buttonGroup}>
          <Image
            style={{height: 20, width: 20}}
            source={require('./Accept.png')}
            resizeMode="contain"
          />
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
          <Image
            style={{height: 20, width: 20}}
            source={require('./set.png')}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <View style={styles.searchTerm}>
        <Image
          style={{height: 15, width: 15, marginRight: 10}}
          source={require('./search.png')}
        />
        <TextInput placeholder="搜索信息"></TextInput>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          renderItem={({item}) => <RenderItem item={item} />}
          data={isEnabled?data:ApidData}
        />
      </View>
      <Text style={{textAlign: 'center'}}>读取信息总数：{data.length}条</Text>
      <Button title="Add Message" onPress={handleAddMessage} />
    </SafeAreaView>
  );
};

const FlatListScreen = () => (
  <RealmProvider schema={[Message]}>
    <Stack.Navigator
      initialRouteName="MessageList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MessageList" component={MessageFlatList} />
      <Stack.Screen name="MessageItem" component={ItemDetail} />
    </Stack.Navigator>
  </RealmProvider>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    columnGap: 20,
    maxHeight: 30,
    alignItems: 'center',
  },
  searchTerm: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    padding: 5,
    alignItems: 'center',
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 2,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15,
  },
});

export {MessageFlatList, ItemDetail, FlatListScreen};
