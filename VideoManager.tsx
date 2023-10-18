/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Video from 'react-native-video';
import {useVideo} from './VideoContext';

const VideoManager: React.FC = () => {
  const {currentVideo} = useVideo();

  return (
    <>
      <Video
        source={{
          uri: 'https://stream.mux.com/KfaKKN1rwKfW5SHYjlBLd5Qgvl102qf2YW9haG9MhAco.m3u8',
        }}
        paused={currentVideo !== 'video1'}
        poster="https://image.mux.com/KfaKKN1rwKfW5SHYjlBLd5Qgvl102qf2YW9haG9MhAco/thumbnail.png?time=0"
        resizeMode="contain"
        selectedAudioTrack={{
          type: 'title',
          value: 'track_0sec_silence',
        }}
        style={{
          flex: 1,
          ...(currentVideo === 'video1' ? {} : {display: 'none'}),
        }}
      />
      <Video
        source={{
          uri: 'https://stream.mux.com/K01D1Ytly201sGXkj01dAzv957GFa302Mo7exeWYTao4anI.m3u8',
        }}
        paused={currentVideo !== 'video2'}
        poster="https://image.mux.com/KfaKKN1rwKfW5SHYjlBLd5Qgvl102qf2YW9haG9MhAco/thumbnail.png?time=5"
        style={{
          flex: 1,
          ...(currentVideo === 'video2' ? {} : {display: 'none'}),
        }}
      />
    </>
  );
};

export default VideoManager;
