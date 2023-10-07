import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import Video from 'react-native-video';

const audioTracks = {
  preview: 'track_0sec_silence',
  activity: 'track_05sec_silence_side_plank_at_wall',
};

export default function App() {
  const [isPaused, setIsPaused] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const videoPlayerRef: React.MutableRefObject<Video | null> =
    React.useRef(null);
  const [currentAudioTrack, setCurrentAudioTrack] = React.useState(
    audioTracks.preview,
  );
  const restartVideo = () => {
    console.log('restarting video');
    videoPlayerRef.current?.seek(0);
    setIsMuted(false);
    setIsPaused(false);
    setCurrentTime(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>My Video Project </Text>

      <Video
        source={{
          uri: 'https://stream.mux.com/KfaKKN1rwKfW5SHYjlBLd5Qgvl102qf2YW9haG9MhAco.m3u8',
        }}
        ref={videoPlayerRef}
        paused={isPaused}
        muted={isMuted}
        style={styles.video}
        controls={false}
        selectedAudioTrack={{
          type: 'title',
          value: currentAudioTrack,
        }}
        poster="https://image.mux.com/KfaKKN1rwKfW5SHYjlBLd5Qgvl102qf2YW9haG9MhAco/thumbnail.png?time=3"
        repeat={true}
        onEnd={() => {
          console.log('🚀 onEnd');
          setIsMuted(true);
        }}
        onError={error => console.error('🔥 onError', error)}
        onProgress={data => setCurrentTime(data.currentTime)}
        onFrameChange={data => console.log('🚀 onFrameChange', data)}
        onBuffer={data => console.log('🚀 onBuffer', data)}
        onBandwidthUpdate={data => console.log('🚀 onBandwidthUpdate', data)}
        onLoad={data => console.log('🚀 onLoad', data)}
        onLoadStart={() => console.log('🚀 onLoadStart')}
        onReadyForDisplay={() => console.log('🚀 onReadyForDisplay')}
        // bufferConfig={{
        //   minBufferMs: 0,
        //   maxBufferMs: 1000,
        //   bufferForPlaybackMs: 500,
        //   bufferForPlaybackAfterRebufferMs: 5000,
        // }}
        // audioOnly={true} // it only works if there's a valid poster
      />
      <View style={{flex: 1}}>
        <Button
          onPress={() => setIsPaused(prev => !prev)}
          title={isPaused ? 'Resume' : 'Pause'}
        />
        <Button
          onPress={() => {
            restartVideo();
            console.log('changing audio track to', audioTracks.preview);
            setCurrentAudioTrack(audioTracks.preview);
          }}
          title={'Restart'}
        />
        <Text>Current time: {currentTime}</Text>
        <Button
          onPress={() => {
            restartVideo();

            console.log('changing audio track to', audioTracks.activity);
            setCurrentAudioTrack(audioTracks.activity);
          }}
          title={'Start Exercise'}
        />
        <Text>Current audio track: {currentAudioTrack}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  video: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
