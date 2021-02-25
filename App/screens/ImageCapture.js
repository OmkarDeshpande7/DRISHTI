import React from 'react';
import { StyleSheet, Image, View, Button, FileSystem } from 'react-native';
import { Audio } from 'expo-av';
import { RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB, RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT } from 'expo-av/build/Audio';

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
          await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT);
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
            // await sound.loadAsync(require('' + audioUrl));
            // console.log("playing")
            // await sound.playAsync();
            // // Your sound is playing!
            
            // // Don't forget to unload the sound from memory
            // // when you are done using the Sound object
            // await sound.unloadAsync();
            // console.log("done")
            // let csrftoken = Cookies.get('csrftoken');
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
    <Button
    title={recording ? 'Stop Recording' : 'Start Recording'}
    onPress={recording ? stopRecording : startRecording}
   
  />

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
    width : 300,
    height: 200,
    resizeMode: 'stretch',
  },
});
