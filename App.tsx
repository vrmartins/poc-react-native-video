import * as React from 'react';
import MyVideo from './components/MyVideo';
import {Button} from 'react-native';
/**
 * Questions:
 * - video is taking ~10sec to load using 3G. .Is it blocking for the project?
 * - How can I know in which bitrate the video is running?
 * - How can I preload the video?
 * - Why audio is not playing in Android?
 */

export default function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <>
      <MyVideo hidden />
      {isVisible && <MyVideo />}
      <Button title="Show Video" onPress={() => setIsVisible(true)} />
    </>
  );
}
