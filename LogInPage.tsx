import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableHighlight,
  Button,
  Alert,
} from 'react-native';

const Data = [
  {
    key: 1,
    image: '',
    text: 'Sign in with Facebook',
    color: 'blue',
  },
  {
    key: 2,
    image: '',
    text: 'Sign in with Apple',
    color: 'black',
  },
  {
    key: 3,
    image: '',
    text: 'Sign in with Google',
    color: 'lightblue',
  },
];
const renderSignInButton = ({item}) => (
  <TouchableHighlight
    onPress={() => Alert.alert('clicked')}
    underlayColor="white"
    activeOpacity={0.6}>
    <View
      style={styles.buttonItem}
      backgroundColor={item.color ? item.color : 'grey'}>
      <Image source={item.image} />
      <Text style={{color: 'white', fontSize: 15}}>{item.text}</Text>
    </View>
  </TouchableHighlight>
);

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => {
    if (email === '123@123.com' && password === '123456') {
      Alert.alert('登陆成功！');
    } else Alert.alert('登陆失败！');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1, alignItems: 'center', margin: 30}}
        behavior={'padding'}>
        <Text style={styles.header}>Sign in</Text>
        <FlatList
          style={{maxHeight: 180}}
          data={Data}
          renderItem={renderSignInButton}
        />
        <Text style={{margin: 10, color: 'grey'}}>
          —————————— or ——————————
        </Text>
        <Text style={{margin: 10}}>
          Sign in with the same method you originally used to order your course
        </Text>
        <View style={styles.InputGroup}>
          <Image />
          <TextInput
            style={{flex: 1}}
            placeholder="Email Address"
            onChangeText={setEmail}
            value={email}></TextInput>
        </View>
        <View style={styles.InputGroup}>
          <Image />
          <TextInput
            style={{flex: 1}}
            placeholder="Your password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <Button title="Sign in" onPress={handleLogIn}></Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 20,
  },
  InputGroup: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 20,
    borderRadius: 10,
    margin: 5,
  },
  buttonItem: {
    justifyContent: 'row',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 25,
    minWidth: 255,
    margin: 8,
    alignItems: 'center',
  },
});

export default LogInPage;
