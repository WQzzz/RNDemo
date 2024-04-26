import React, {useState} from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Button,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {Route, useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {change, initial} from './src/features/searchData/searchDataSlice';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';

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

interface RootState {
  searchData: {items: [{id: string; active: boolean}]};
}

type RootStackParamList = {
  PimsItem: { item: string }; 
};

// const ItemDetail  = ()  => {
//   const navigation = useNavigation();
//   const route = useRoute<RouteProp<RootStackParamList, 'PimsItem'>>();
//   return (
//     <View>
//       <Text>{route.params?.item}</Text>
//       <Button
//         title="GO BACK"
//         onPress={() => {
//           navigation.goBack();
//         }}></Button>
//     </View>
//   );
// };

const ItemDetail  = ({route}:{route:any})  => {
  const navigation = useNavigation();
  const {title} = route.params;
  return (
    <View>
      <Text>{title}</Text>
      <Button
        title="GO BACK"
        onPress={() => {
          navigation.goBack();
        }}></Button>
    </View>
  );
};

const Item = ({item}: {item: string}) => {
  const navigation = useNavigation();
  //const [clicked, setClicked] = useState(false);
  const datas = useSelector((state: RootState) => state.searchData.items);
  const dispatch = useDispatch();

  if (datas.find(data => data.id === item) === undefined) {
    dispatch(initial(item));
  }

  let clicked = datas.find(data => data.id === item)?.active;

  return (
    <Pressable
      style={clicked ? styles.itemClicked : styles.item}
      onPress={() => {
        dispatch(change(item));
        navigation.navigate("PimsItem" as never , {item} as never);
      }}> 
      <Text style={{color: clicked ? 'blue' : 'grey'}}>{item}</Text>
    </Pressable>
  );
};

const Items = ({items}: {items: string[]}) => {
  const itemList = items.map(item => <Item key={item} item={item} />);
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>{itemList}</View>
  );
};

const SearchTagSectionList = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SectionList
        style={{flex: 1, margin: 20}}
        sections={Data}
        renderItem={({item}) => <Items items={item} />}
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
