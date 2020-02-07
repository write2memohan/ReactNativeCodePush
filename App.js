import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CodePush from "react-native-code-push";

class App extends Component {

  render () {
    return (
  <View>
      <Text>Testing code push 123</Text>
      <TouchableOpacity onPress={()=> {CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE
    });}}>
        <Text>Check for updates</Text>
      </TouchableOpacity>
  </View>

    );
  }
}
//set check frequency options
const codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_START };
const myApp = CodePush(codePushOptions)(App);

AppRegistry.registerComponent('myApp', () => myApp);

export default myApp;