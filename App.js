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

  codePushDownloadDidProgress(progress) {
    console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
  }

  render () {
    return (
  <View style={{flex:1, flexDirection:'column'}}>
      <Text style={{flex:1, alignSelf:'center',fontSize: 40}}> Headerq 112 </Text>
      <Text style={{flex:3, alignSelf:'center'}}>Test code push asdasd !!! </Text>
      <TouchableOpacity style={{flex:2, alignItems:'center'}} onPress={()=> {CodePush.sync({
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