import React, { Component } from 'react'
import { CreateGeofence } from './components/CreateGeofence.js'
//import WoosmapGeofencing from 'react-native-woosmap-geofencing';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Picker
} from 'react-native'

class App extends Component {
  state = {
    woosmapKey: "b98390e7-8750-49ac-88bd-451e7763b21c",
    profile: "",
  }

  

  

  setWoosmapKey = () => {
      console.log("Woosmap Key = " + this.state.woosmapKey)
      // Set the Woosmap Project key
  } 

  initializeWoosmapGeofencing = () => {
    console.log("Plugin is initialized {WoosmapKey: " + this.state.woosmapKey + ", profile: " + this.state.profile + "}")
    // Initialize Woosmap Geofencing React Native Plugin
  }

  setSFMC = () => {
    var sfmcCredentials = {
      authenticationBaseURI: "https://mcdmfc5rbyc0pxgr4nlpqqy0j-x1.auth.marketingcloudapis.com",
      restBaseURI: "https://mcdmfc5rbyc0pxgr4nlpqqy0j-x1.rest.marketingcloudapis.com",
      client_id: "7oalkbl4iwd8t3ultnxu9mg6",
      client_secret: "SdwwhNxywVs2IEc3akCdAs2r",
      contactKey: "ID001",
      regionEnteredEventDefinitionKey: "APIEvent-2c62ebe7-1761-1311-ef26-18f04ca4f521",
      regionExitedEventDefinitionKey: "APIEvent-2c62ebe7-1761-1311-ef26-18f04ca4f521"
    };

    console.log("Initialize SFMC connector")
    // Define SFMC credentials

  }

  startStopTrackingProfile = (value) => {
    this.state.profile = value;
    switch (value) {
      case 'liveTracking':
        console.log('Start live tracking');
        // start live tracking
        break;
      case 'passiveTracking':
        console.log('Start passive tracking');
        // start passive tracking
        break;
      case 'visitTracking':
        console.log('Start visit tracking');
        // start visit tracking
        break;
      case 'stopTracking':
          console.log('Stop tracking');
          // stop tracking
          break;
      default:
        console.log('Stop tracking');
        // stop tracking
        break;
    }
  }

 render() {
    return (
      <View style={styles.container}>
        <View>
          <Button
            title="Initialize Plugin"
            onPress={this.initializeWoosmapGeofencing}
           />
        </View>
        <Separator />
        <View style={styles.rowView}>
          <TextInput 
                style={styles.textInput} 
                placeholder={this.state.woosmapKey} 
                onChangeText={(value) => this.state.woosmapKey = value}/>
          <Button style={{margin: 10}} title="SET" onPress={this.setWoosmapKey}/>
        </View>
        <Separator />
        <View>
          <Text style={styles.textInput}>
            Change tracking profile: 
          </Text>
          <Picker
          selectedValue={this.state.profile}
          style={{ marginHorizontal: 80 }}
          onValueChange={(value, itemIndex) => {this.startStopTrackingProfile(value)}}
          >
            <Picker.Item label="no tracking" value="stopTracking" />
            <Picker.Item label="live tracking" value="liveTracking" />
            <Picker.Item label="passive tracking" value="passiveTracking" />
            <Picker.Item label="visit tracking" value="visitTracking" />
          </Picker>
        </View>
        <Separator />
        <View>
          <Button
            title="Init Salesforce MC"
            onPress={this.setSFMC}
           />
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  rowView: {
    flexDirection: "row",
    margin: 10

  },
  textInput: {
    color: "#000000",
    fontSize: 15,
    marginVertical: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})

const Separator = () => (
  <View style={styles.separator} />
);

export default App;