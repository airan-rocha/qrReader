import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);

const Camera = () => {
  const takePicture = async camera => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    console.log(data.uri);
  };

  return (
    <View style={styles.container}>
      {/* <Text>camera test 1.0</Text> */}
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.front}
        flashMode={RNCamera.Constants.FlashMode.on}
        whiteBalance={RNCamera.Constants.WhiteBalance.auto}
        zoom={0.0}
        androidCameraPermissionOptions={{
          title: 'Permissão para uso da Camera',
          message: 'O app precisa da sua permissão para usar a camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View
              style={{flex: 0, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> SNAP </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
