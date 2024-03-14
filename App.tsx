/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import Page from './Basics';
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
  TouchableWithoutFeedback
} from 'react-native';



function InputPage(){
  const [ModalVisible,setModalVisible]=useState(false)
  return(
  <SafeAreaView style={styles.container} >
      <Modal visible={ModalVisible} transparent={true} animationType="slide">
        <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>
        <View style={styles.modal}>
          <Text>This is a Modal</Text>
          <Button onPress={()=>{setModalVisible(false)}} title="Hide it"></Button>
          <Text>Bad text</Text>
        </View>
        </View>
      </Modal>
      <Button title="show Modal" onPress={()=>{setModalVisible(true)}}></Button>
      <ScrollView style={{flex:1}}>
      <Text style={{fontSize:42,margin:20,backgroundColor:"yellow"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </ScrollView>
    <Switch value={true}>

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
  return <InputPage/>;
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
