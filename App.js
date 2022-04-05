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
    profile: ""
  }

  setWoosmapKey = () => {
      console.log("Woosmap Key = " + this.state.woosmapKey)
      // Set the Woosmap Project key
  } 

  initializeWoosmapGeofencing = () => {
    console.log("Plugin is initialized {WoosmapKey: " + this.state.woosmapKey + ", profile: " + this.state.profile + "}")
    // Initialize Woosmap Geofencing React Native Plugin
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
          color="#0000ff"
          onPress={this.initializeWoosmapGeofencing}
           />
        </View>
        <View style={styles.rowView}>
          <TextInput 
                style={styles.textInput} 
                placeholder={this.state.woosmapKey} 
                onChangeText={(value) => this.state.woosmapKey = value}/>
          <Button style={{margin: 10}} title="SET" onPress={this.setWoosmapKey}/>
        </View>
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
  }
})

export default App;