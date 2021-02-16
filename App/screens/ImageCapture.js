import React from 'react';
import { StyleSheet, Image, View, Button, FileSystem } from 'react-native';
import { Audio } from 'expo-av';

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
        const sound = new Audio.Sound();
        try {
          await sound.loadAsync({ audioUrl });
          console.log("playing")
          await sound.playAsync();
          // Your sound is playing!
          
          // Don't forget to unload the sound from memory
          // when you are done using the Sound object
          await sound.unloadAsync();
          console.log("done")
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
