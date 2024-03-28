/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import Page from './Basics';
import FishFlatList  from './FishFlatList';
import {MessageFlatList,ItemDetail} from './MessageFlatList';
import VideoFlatList from './VideoFlatList';
import PimsSectionList  from './PimsSectionList';
import SearchTagSectionList from './SearchTagSectionList'
import LogInPage from './LogInPage'
import Navig from './Navig';

import { NavigationContainer } from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


import { 
  KeyboardAvoidingView,
  TextInput,
  Button,
  Text,
  Keyboard,
  Platform,
  StyleSheet,
  SafeAreaView,
  View,
  Modal,
  ScrollView,
  Switch,
  ActivityIndicator,
  TouchableWithoutFeedback
} from 'react-native';



function InputPage(){
  const [ModalVisible,setModalVisible]=useState(false)
  const [switchEnable,setSwitchEnable]=useState(false)
  return(
  <SafeAreaView style={styles.container} onPress={()=>{Keyboard.dismiss}}>
    <Modal visible={ModalVisible} transparent={true} animationType="slide">
        <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>
        <View style={styles.modal}>
          <ActivityIndicator color="pink" size="large"></ActivityIndicator>
          <Button onPress={()=>{setModalVisible(false)}} title="Hide it"></Button>
          <Text>This is a Modal</Text>
        </View>
        </View>
    </Modal>
    <Button color="black" title="show Modal" onPress={()=>{setModalVisible(true)}}></Button>
    <ScrollView style={{flex:1}}>
      <Text style={{fontSize:42,marginLeft: 20,marginRight: 20}} backgroundColor={switchEnable?"pink":"yellow"} onPress={()=>{Keyboard.dismiss}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </ScrollView>
    <Switch value={switchEnable} trackColor={{true:"pink"}} thumbColor={switchEnable?"white":"white"}   ios_backgroundColor="yellow" onValueChange={()=>setSwitchEnable(!switchEnable)}>
    </Switch>
    <KeyboardAvoidingView style={{flex:1,justifyContent:"center"}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text>Please enter somethings</Text>
      <TextInput keyboradType="default" style={{borderWidth:1}}></TextInput>
      <Button title='submit'></Button>
    </KeyboardAvoidingView>
  </SafeAreaView>
  )
}


function App(): React.JSX.Element {
  return  (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Navig} />
    </Stack.Navigator>
  </NavigationContainer>)
    
}

const styles = StyleSheet.create({
  modal:{
    justifyContent:"center",
    alignItems:"center",
    height:180,
    width:180,
    borderWidth:1,
    backgroundColor:"white"
  },
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});


export default App;
