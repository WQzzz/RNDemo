import React from 'react'


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()



import {FlatListScreen} from './MessageFlatList'
import {SearchTagScreen,SearchTagSectionList} from './SearchTagSectionList';

function Navig() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="FlatList" component={FlatListScreen} />
        <Tab.Screen name="SectionList" component={SearchTagScreen} />
      </Tab.Navigator>
    );
  }

  export default Navig