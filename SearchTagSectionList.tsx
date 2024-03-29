import React, {useState} from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Button
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Data = [
  {
    title: 'Categories',
    data: [
      ['Conversation Skills', 'Culture', 'Grammar', 'Language Learning Tips'],
    ],
  },
  {
    title: 'Keywords',
    data: [['Arts', 'Entertainment', 'Slang', 'Travel']],
  },
  {
    title: 'Status',
    data: [['Unplayed', 'In progress', 'Played', 'Downloaded']],
  },
];

const ItemDetail = ({route, navigation}) => (
  <View>
    <Text>{route.params.item}</Text>
    <Button title='GO BACK' onPress={()=>{navigation.goBack()}}></Button>
  </View>
);

const Item = ({item, navigation}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Pressable
      style={clicked ? styles.itemClicked : styles.item}
      onPress={() => {
        setClicked(!clicked);
        navigation.navigate('PimsItem', {item});
      }}>
      <Text style={{color: clicked ? 'blue' : 'grey'}}>{item}</Text>
    </Pressable>
  );
};

const Items = ({items, navigation}) => {
  const itemList = items.map(item => (
    <Item navigation={navigation} key={item} item={item} />
  ));
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>{itemList}</View>
  );
};

const SearchTagSectionList = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SectionList
        style={{flex: 1, margin: 20}}
        sections={Data}
        renderItem={({item}) => <Items navigation={navigation} items={item} />}
        renderSectionHeader={({section}) => (
          <Text style={{marginTop: 10, marginBottom: 10}}>{section.title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const SearchTagScreen = () => (
  <Stack.Navigator
    initialRouteName="SearchList"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="SearchList" component={SearchTagSectionList} />
    <Stack.Screen name="PimsItem" component={ItemDetail} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    alignSelf: 'flex-start',
  },
  itemClicked: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 50,
    backgroundColor: '#e6e6fa',
    alignSelf: 'flex-start',
  },
});

export {SearchTagSectionList, SearchTagScreen};
