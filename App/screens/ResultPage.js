
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Speech from 'expo-speech';

// default component to be rendered from file
export default function ResultPage(props) {

    useEffect(() => {
        // Update the document title using the browser API
        Speech.speak("hello to result page");
      });
  // UI components rendering
  return (
    <View style={styles.container}>
      <Text>hello to result</Text>
    </View>
  );
}

// CSS stylesheet for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  camera: {
    flex: 1,
    flexDirection:'row',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    borderWidth:1,
    flexDirection:'column',
    alignItems: 'center',
    backfaceVisibility:"visible",
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
