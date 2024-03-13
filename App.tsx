/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [textEntered,setTextEntered]=useState("begin");
  const [textIsDisabled,setTextIsDisabled]=useState(false);
 

  const backgroundStyle = {
    flex:1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    justifyContent:"space-evenly",
    alignItems:"center"
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.buttonBox}>
        <Button style={styles.button} title="Please please press me" onPress={()=>Alert.alert("pressed")} color="#f194ff" accessibilityLabel="Learn more about this purple button"></Button>
        <Button style={styles.button} title="Press me" onPress={()=>Alert.alert("pressed")} color="black" accessibilityLabel="Learn more about this purple button"></Button>
      </View>
      <View style={styles.imageBox}>
        <Image style={styles.smallImage}
        source={{
          url: 'https://reactnative.dev/img/tiny_logo.png',
        }}></Image>
         <Image style={styles.smallImage}
        source={require('./image.jpg')}/>
      </View>
      <View style={styles.textBox}>
        <Text>A</Text>
        <Text style={{alignSelf:"center"}}>little</Text>
        <Text style={{alignSelf:"flex-end"}}>cat</Text>
        <Text style={{color:"red"}}>
          <Text>sitting</Text>
          <Text>here</Text>
          <Text>{textEntered}</Text>
        </Text>
      </View>
      <View style={{flexDirection:"row"}}>
        <TextInput style={{minHeight:40, width:200,borderWidth:1}} 
        onChangeText={(text)=>{setTextEntered(text);}}
        editable={!textIsDisabled}
        multiline={true}
         />
        <Button onPress={()=>setTextIsDisabled(!textIsDisabled)} title={textIsDisabled?"enable TextInput":"disable TextInput"}></Button>
      </View>
      <View style={{flexDirection:"row",alignSelf:"stretch",justifyContent:"space-around"}}>
        <TouchableHighlight  onPress={()=>{Alert.alert("pressed")}}>
          <View>
            <Text style={styles.button}>test</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={()=>{Alert.alert("pressed")}}>
          <View style={styles.button}>
            <Text>test</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={()=>{Alert.alert("pressed")}}>
          <View style={styles.button}>
            <Text>test</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonBox:{
    backgroundColor:"white",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button:{
    backgroundColor:"pink",
    alignItems:"center"
  },
  imageBox:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    backgroundColor:"white",
  },
  smallImage:{
    height:100,
    width:100,
  },
  textBox:{
    minHeight:100,
    justifyContent:"space-around",
    alignItems:"flex-start",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
