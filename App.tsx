import * as React from 'react';
import MyVideo from './components/MyVideo';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function PauseScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pause Screen</Text>
    </View>
  );
}
function HomeScreen({ navigation }) {
  return <><MyVideo />
   <Button
        title="Go to Pause"
        onPress={() => navigation.navigate('Pause')}
      /></>
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pause" component={PauseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
