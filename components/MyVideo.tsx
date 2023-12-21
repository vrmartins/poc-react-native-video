import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import Video from 'react-native-video';
/**
 * Questions:
 * - video is taking ~10sec to load using 3G. .Is it blocking for the project?
 * - How can I know in which bitrate the video is running?
 * - How can I preload the video?
 * - Why audio is not playing in Android?
 */

const audioTracks = {
  preview: 'track_0sec_silence',
  activity: 'track_05sec_silence_side_plank_at_wall',
};

export default function MyVideo({hidden = false}: {hidden?: boolean}) {
  const [isPaused, setIsPaused] = React.useState(hidden); // if the video player is hidden, the video starts paused
  const [isMuted, setIsMuted] = React.useState(false);
  // const [currentTime, setCurrentTime] = React.useState(0);
  const videoPlayerRef: React.MutableRefObject<Video | null> =
    React.useRef(null);
  const [currentAudioTrack, setCurrentAudioTrack] = React.useState(
    audioTracks.preview,
  );
  const restartVideo = React.useCallback(() => {
    console.log('restarting video');
    videoPlayerRef.current?.seek(0);
    setIsMuted(false);
    setIsPaused(false);
    // setCurrentTime(0);
  }, []);

  const ONE_SECOND = 1000;
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://stream.mux.com/iWybZBJdK02RoSNbuuGsAbM93eDcVTUZgbatfLEpLaqU.m3u8',
          // uri: 'https://stream.mux.com/KfaKKN1rwKfW5SHYjlBLd5Qgvl102qf2YW9haG9MhAco.m3u8',
          // uri: 'https://stream.mux.com/K01D1Ytly201sGXkj01dAzv957GFa302Mo7exeWYTao4anI.m3u8', // 21 minutes video in 1080p
          // uri: originalUrl,
          type: 'm3u8',
        }}
        ref={videoPlayerRef}
        paused={isPaused}
        muted={false}
        style={styles.video}
        controls={true}
        resizeMode="contain"
        selectedAudioTrack={{
          type: 'title',
          value: currentAudioTrack,
        }}
        poster="https://image.mux.com/KfaKKN1rwKfW5SHYjlBLd5Qgvl102qf2YW9haG9MhAco/thumbnail.png?time=5"
        // repeat={true}
        reportBandwidth
        onEnd={() => {
          console.log('🚀 onEnd');
          setIsMuted(true);
        }}
        onError={error => console.error('🔥 onError', error)}
        // onProgress={data => setCurrentTime(data.currentTime)}
        onFrameChange={data => console.log('🚀 onFrameChange', data)}
        onBuffer={data => console.log('🚀 onBuffer', data)}
        onBandwidthUpdate={data => console.log('🚀 onBandwidthUpdate', data)}
        onLoad={data => {
          console.log('🚀 onLoad', data);
        }}
        // onPlaybackRateChange={data =>
        //   console.log('🚀 onPlaybackRateChange', data)
        // }
        onVideoBuffer={() => console.log('🚀 onVideoBuffer')}
        onLoadStart={() => console.log('🚀 onLoadStart')}
        onVideoLoad={() => console.log('🚀 onVideoLoad')}
        onReadyForDisplay={() => console.log('🚀 onReadyForDisplay')}
        testID={"videoPlayer"}
        accessible
        // accessibilityLabel={accessibilityLabel}
        // accessibilityHint={accessibilityHint}
        // ref={videoPlayerRef}
        // style={style}
        // resizeMode={resizeMode}
        // paused={isPaused}
        // muted={isMuted}
        // repeat={repeat}
        rate={1.0}
        // onLoadStart={onLoadStart}
        // onLoad={onLoad}
        // onReadyForDisplay={onReadyForDisplay}
        // onError={onLoadError}
        playInBackground // due to a bug in react-native-video, this is needed for the visual part of the video to exist when the video is brought back into foreground
        // onSeek={onSeek}
        // onBuffer={onBuffer}
        // reportBandwidth
        // onBandwidthUpdate={onBandwidthUpdate}
        posterResizeMode={"cover"}
        bufferConfig={{
          minBufferMs: 5 * ONE_SECOND,
          maxBufferMs: 30 * ONE_SECOND,
          bufferForPlaybackMs: 1 * ONE_SECOND,
          bufferForPlaybackAfterRebufferMs: 1 * ONE_SECOND,
        }}
        // playWhenInactive={playWhenInactive}
        // onEnd={onEnd}
        // onProgress={onProgress}
        // textTracks={textTracks}
        // selectedTextTrack={selectedTextTrack}
        // subtitleStyle={subtitleStyle}
        // progressUpdateInterval={progressUpdateInterval}
      />
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
