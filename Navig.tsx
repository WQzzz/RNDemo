import React from 'react'


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()



import {MessageFlatList, ItemDetail,FlatListScreen} from './MessageFlatList'
import SearchTagSectionList from './SearchTagSectionList';

function Navig() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="FlatList" component={FlatListScreen} />
        <Tab.Screen name="SectionList" component={SearchTagSectionList} />
      </Tab.Navigator>
    );
  }

  export default Navig