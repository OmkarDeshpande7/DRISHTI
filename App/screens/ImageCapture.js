import React from 'react';
import { StyleSheet, Image, View, Button, FileSystem, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';
// const speech = require('@google-cloud/speech');
// TODO: What to do with the module?

const ImageCapture = ({navigation, route}) => {
    const [recording, setRecording] = React.useState();
    
    async function startRecording() {
        try {
          console.log('Requesting permissions..');
          await Audio.requestPermissionsAsync();
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
          }); 
          console.log('Starting recording..');
          const recording = new Audio.Recording();
          await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
          await recording.startAsync(); 
          setRecording(recording);
          console.log('Recording started');
        } catch (err) {
          console.error('Failed to start recording', err);
        }
      }


 
      
      async function stopRecording() {
        console.log('Stopping recording..');
        setRecording(undefined);
        await Audio.setIsEnabledAsync(true);
        await recording.stopAndUnloadAsync();
        const audioUrl = recording.getURI(); 
      
      
        console.log('Recording stopped and stored at', audioUrl);
        let sound = new Audio.Sound();

        try {

            const data = new FormData();
            data.append('file', {
              uri: audioUrl,
              name: 'test.m4a',
              type: 'audio/m4a',
            })
            data.append('file2', {
              uri: route.params.uri,
              name: 'image.jpg',
              type: 'image/jpg',
            })
          fetch('http://192.168.0.28:8000', {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              
            },
            body: data,
          }).then((response) => console.log(response));

        } catch (error) {
          // An error occurred!
          console.log(error)
        }
      }

  return (
      <View>
    <Image source={{uri : route.params.uri}} style={styles.stretch}/>
    <TouchableOpacity style={styles.button}

    onPress={recording ? stopRecording : startRecording}>
      <Text style={styles.text}>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
    </TouchableOpacity>

   </View>
    
  );
}

export default ImageCapture;

const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'row',
  },
  stretch: {
    width : 400,
    height: 500,
    resizeMode: 'stretch',
  },
  button:{
    height:200,
    justifyContent:'center',
    alignItems:'center'

  },

});
