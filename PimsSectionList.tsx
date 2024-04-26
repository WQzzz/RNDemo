import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {initial} from './src/features/pimsData/pimsDataSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  SectionList,
  Image,
  Pressable,
  TouchableHighlight,
  TextInput,
} from 'react-native';

const axios = require('axios').default;

interface PimsListData {
  title: string;
  data: [string];
}

const PimsData = [
  {
    title: 'Popular Free Lessons for English Speakers',
    data: [
      //"spanich",
      {
        key: 1,
        language: 'Spanish',
        image: '',
      },
      {
        key: 2,
        language: 'French',
        image: '',
      },
      {
        key: 3,
        language: 'Italian',
        image: '',
      },
      {
        key: 4,
        language: 'German',
        image: '',
      },
      {
        key: 5,
        language: 'Chinese',
        image: '',
      },
    ],
  },
  {
    title: 'All Free Lessons for English Speakers',
    data: [
      {
        key: 6,
        language: 'GerAlbanianman',
        image: '',
      },
      {
        key: 7,
        language: 'Arabic',
        image: '',
      },
      {
        key: 8,
        language: 'Armenian',
        image: '',
      },
      {
        key: 9,
        language: 'Croatian',
        image: '',
      },
    ],
  },
];

const Item = ({item}:{item:string}) => {
  // console.log(item)
  return (
    <View style={styles.lessonItem}>
      <Icon name="play-circle" size={30} />
      <Text style={{paddingLeft: 10}}>
        {item}
      </Text>
    </View>
  );
};

const PimsSectionList = () => {
  const initialData: PimsListData = {title: 'movies', data: ['initial one']};
  const [data, setData] = useState<PimsListData>(initialData);

  const updateMovie = async (value: PimsListData) => {
    try {
      const jsonValue = JSON.stringify(value); //序列化
      console.log('写数据');
      await AsyncStorage.setItem('PimsData', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const addMovie = (text: string) => {
    console.log('addMovie');
    setData(prevData => {
        const newData = { ...prevData };
        newData?.data.push(text);
        return newData;
      });
    console.log(data)
  };

  

  const initialList = async () => {
    try {
      const jsonValue = JSON.stringify(initialData); //序列化
      await AsyncStorage.setItem('PimsData', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    // getData();
    console.log('组件渲染');
    getAsyncData();

    // return () => {
    //   // 在组件即将卸载前写入数据库
    //   console.log("组件卸载")
    //   console.log(data)
    //   updateMovie(data);
    //   console.log("组件已卸载")
    // };
  }, []);

  const getAsyncData = async () => {
    try {
      console.log('进入getAsyncData');
      const jsonValue = await AsyncStorage.getItem('PimsData');
      console.log("拉得数据："+jsonValue);
      if (jsonValue != null) {
        setData(JSON.parse(jsonValue));
      } else {
        initialList();
      }
    } catch (e) {
      console.log(e);
      // error reading value
    } finally{
        console.log('读后状态');
        console.log(data);
    }
  };

  const [text, setText] = useState('');

  const handleAddMovie = () => {
    addMovie(text);
    updateMovie(data);
    setText('')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button title="Back" color="black"></Button>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>I Want to Learn...</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={{
            marginLeft: 10,
            paddingLeft: 5,
            backgroundColor: 'white',
            borderRadius: 15,
            minHeight: 15,
            flex: 1,
          }}
          placeholder="please type here"
          onChangeText={setText}
          value={text}></TextInput>
        <Button title="add movie" onPress={handleAddMovie}></Button>
      </View>
      <View style={styles.list}>
        <SectionList
          sections={[data]}
          renderItem={({item}) => <Item item={item} />}
          renderSectionHeader={({section}) => (
            <Text style={styles.listHeader}>{section.title}</Text>
          )}
        />
      </View>
      <Pressable
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          padding: 10,
          marginBottom: 30,
          marginLeft: 80,
          marginRight: 80,
          backgroundColor: '#dcdcdc',
        }}>
        <Text style={{color: 'grey'}}>Next</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const PimsScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="MessageList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="PimsList" component={PimsSectionList} />
      {/* <Stack.Screen name="PimsItem" component={ItemDetail} /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'flex-start',
    marginLeft: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  list: {
    // marginLeft:20,
    flex: 1,
  },
  listHeader: {
    marginLeft: 35,
    marginTop: 10,
    alignSelf: 'flex-start',
    color: 'grey',
    fontWeight: 'bold',
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2,
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dcdcdc',
  },
});

export {PimsSectionList, PimsScreen};
