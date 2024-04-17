import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';

// (...)
import {FlatListScreen} from './MessageFlatList';
import {SearchTagScreen, SearchTagSectionList} from './SearchTagSectionList';
import {PimsScreen} from './PimsSectionList';

function Navig() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          iconName = focused ? 'list' : 'list-outline';

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color="pink" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="FlatList" component={FlatListScreen} />
      <Tab.Screen name="SectionList" component={SearchTagScreen} />
      <Tab.Screen name="PimsSection" component={PimsScreen} />
    </Tab.Navigator>
  );
}

export default Navig;
