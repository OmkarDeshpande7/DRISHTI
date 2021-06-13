import React from 'react';
import { StyleSheet, Image, View, Button, FileSystem, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';
import  base_url  from '../assets/base_url';
// default component to be rendered from file
const ImageCapture = ({ navigation, route }) => {
  const [recording, setRecording] = React.useState(); // react hook to store recording status

  // function to start recording
  async function startRecording() {

    // check and ask the audio record permissions
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      //start a new recording
      
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      
      //setting flag to record high quality audio
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();   // started
      setRecording(recording);
      
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }


  //stop recording function
  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await Audio.setIsEnabledAsync(true);
    await recording.stopAndUnloadAsync();
    const audioUrl = recording.getURI();    // get the recording uri at the local file storage.
    Speech.speak("Recording stopped. Wait for the answer.");

    console.log('Recording stopped and stored at', audioUrl);


    // try to send both the files to deployment server for further processing
    try {

      const data = new FormData();    //create FormData object

      //adding audio file
      data.append('file', {
        uri: audioUrl,
        name: 'test.m4a',
        type: 'audio/m4a',
      })

      //adding image file
      data.append('file2', {
        uri: route.params.uri,
        name: 'image.jpg',
        type: 'image/jpg',
      })

      // send post request to django server
      fetch(base_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data,     //added FormData object
      }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.ans);
        navigation.navigate('ResultPage', { uri: route.params.uri, ans : responseJson.ans })
      });

    } catch (error) {
      // An error occurred!
      console.log(error)
    }
  }


  // UI components rendering
  return ( 
    <View>
            <TouchableOpacity style={styles.button}

onPress={recording ? stopRecording : startRecording}>

        <Text style={styles.text}>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
      </TouchableOpacity>

    </View>

  );
}

export default ImageCapture;    //export default package

// CSS stylesheet for the components
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: 'row',
  },
  stretch: {
    width: 400,
    height: 800,
    resizeMode: 'stretch',
  },
  button: {
    height: 800,
    justifyContent: 'center',
    alignItems: 'center'

  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight:'bold',
    textAlign : 'center'
  },
});
