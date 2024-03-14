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
  TouchableWithoutFeedback
} from 'react-native';


function InputPage(){
  const [ModalVisible,setModalVisible]=useState(false)
  return(
  <SafeAreaView style={styles.container} >
      <Modal visible={ModalVisible} transparent={false} animationType="slide">
        <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>
        <View style={styles.modal}>
          <Text>This is a Modal</Text>
          <Button onPress={()=>{setModalVisible(false)}} title="Hide it"></Button>
          <Text>Bad text</Text>
        </View>
        </View>
      </Modal>
      <Button title="show Modal" onPress={()=>{setModalVisible(true)}}></Button>
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
