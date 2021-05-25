
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Speech from 'expo-speech';
import DoubleClick from 'react-native-double-tap';
// default component to be rendered from file
export default function ResultPage(props) {

    useEffect(() => {
        // Update the document title using the browser API
      console.log(props);
      Speech.speak("The answer is");
      setTimeout(
        () => {  Speech.speak(props.route.params.ans.answer); },
        300
      )
      setTimeout(
        () => {  Speech.speak("Double tap for new question."); },
        3000
      )
      });
  // UI components rendering
  return (
    <DoubleClick
      style={styles.camera}
          singleTap={() => {
            console.log("single tap");
          }}
          doubleTap={() => {
            props.navigation.navigate('Tap')
          }}
          delay={200}
        >
    <View style={styles.container}>
      <Text style={styles.text}>{props.route.params.ans.answer}</Text>
    </View>
    </DoubleClick>
  );
}

// CSS stylesheet for the components
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginVertical: Dimensions.get('window').height*0.3,  },
  camera: {
    flex: 1,
    flexDirection:'column',
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
    fontSize: 30,
    color: 'black',
    fontWeight:'bold',
    textAlign : 'center'
  },
});
