import { StyleSheet, Dimensions, View } from 'react-native';
import Tap from './screens/Tap'
import ImageCapture from './screens/ImageCapture'
import ResultPage from './screens/ResultPage'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tap"
          component={Tap}
        />
        <Stack.Screen name="ImageCapture" component={ImageCapture} />
        <Stack.Screen name="ResultPage" component={ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'row',
  },
});
