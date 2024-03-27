import React from 'react'


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()


import FishFlatList from './FishFlatList';
import PimsSectionList from './PimsSectionList';

function Navig() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="FlatList" component={FishFlatList} />
        <Tab.Screen name="SectionList" component={PimsSectionList} />
      </Tab.Navigator>
    );
  }

  export default Navig