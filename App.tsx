import 'react-native-gesture-handler';
import * as React from 'react';
import MyVideo from './components/MyVideo';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useFlipper} from '@react-navigation/devtools';

function PauseScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pause Screen</Text>
    </View>
  );
}
function HomeScreen({navigation}) {
  return (
    <>
      <MyVideo />
      <Button
        title="Go to Pause"
        onPress={() => navigation.navigate('Pause')}
      />
    </>
  );
}

export default function App() {
  const Stack = createStackNavigator();

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
      // screenOptions={{detachPreviousScreen: false}}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{detachPreviousScreen: false}}
        />
        <Stack.Screen name="Pause" component={PauseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
