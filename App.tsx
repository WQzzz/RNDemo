/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
  Image
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

  const backgroundStyle = {
    flex:1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    justifyContent:"space-evenly",
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
        </Text>
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
    backgroundColor:"black",
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
