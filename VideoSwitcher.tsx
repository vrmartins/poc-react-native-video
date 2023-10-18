import React from 'react';
import {useVideo} from './VideoContext';
import {Button, Text, SafeAreaView} from 'react-native';

const VideoSwitcher: React.FC = () => {
  const {currentVideo, toggleVideo} = useVideo();

  return (
    <SafeAreaView>
      <Button title="Show Video 1" onPress={() => toggleVideo('video1')} />
      <Button title="Show Video 2" onPress={() => toggleVideo('video2')} />
      <Text>Current Video: {currentVideo}</Text>
    </SafeAreaView>
  );
};

export default VideoSwitcher;
