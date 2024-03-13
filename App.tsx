/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
  TouchableWithoutFeedback
} from 'react-native';

function InputPage(){
  return(
  <SafeAreaView style={styles.container} >
    <View >
      <Text>whera</Text>
    </View>
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
  container: {
    flex: 1,
    justifyContent:"center"
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
