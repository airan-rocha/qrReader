import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Dimensions,
  Image,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../styles/Colors';
import {setHistory, getHistoryFull} from '../Banco/RealmDB';

const {height, width} = Dimensions.get('window');

const QrScan = ({onPressButton, navigation}) => {
  const [flashStatus, setFlashStatus] = useState(
    RNCamera.Constants.FlashMode.off,
  );
  const [flashBtStatus, setflashBtStatus] = useState(Colors.red);

  const [miraQrCode, setMiraQrCode] = useState(
    require('../imagens/miraqr.png'),
  );

  const flashOnOff = () => {
    if (flashStatus === RNCamera.Constants.FlashMode.off) {
      setFlashStatus(RNCamera.Constants.FlashMode.torch);
      setflashBtStatus(Colors.green);
      console.log('Flash ligado');
    } else {
      setFlashStatus(RNCamera.Constants.FlashMode.off);
      setflashBtStatus(Colors.red);
      console.log('Flash Desligado');
    }
  };

  const onSuccess = async e => {
    setMiraQrCode(require('../imagens/miraqrok.png'));

    if (e.data.includes('http://') || e.data.includes('https://')) {
      await setHistory(e.data, 'link');
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    } else {
      await setHistory(e.data, 'text');
    }

    onPressButton();
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        style={styles.preview}
        onRead={onSuccess}
        flashMode={flashStatus}
        topContent={
          <Text style={styles.centerText}>
            Aponte a camera para o código QR
          </Text>
        }
        bottomContent={
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={onPressButton}>
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        }
        cameraType="back"
      />
      <TouchableOpacity style={[styles.btOnFlash]} onPress={flashOnOff}>
        <Icon name="flash-outline" size={30} color={flashBtStatus} />
      </TouchableOpacity>
      <Image style={styles.miraQr} source={miraQrCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    paddingTop: 18,
    color: Colors.champagneDark,
  },
  textBold: {
    fontWeight: '500',
    color: Colors.black,
  },
  buttonText: {
    fontSize: 21,
    color: Colors.blue,
  },
  buttonTouchable: {
    padding: 16,
  },
  btOnFlash: {
    position: 'absolute',
    top: height / 2 - 25,
    padding: 10,
    borderRadius: 20,
    marginLeft: 5,
  },
  miraQr: {
    position: 'absolute',
    top: height / 2 - (width - 100) / 2,
    left: width / 2 - (width - 100) / 2,
    width: width - 100,
    height: width - 100,
  },
});

export default QrScan;
