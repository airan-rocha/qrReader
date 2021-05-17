import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import QrScan from '../../componentes/QrScan';
import Historico from '../../componentes/Historico';

const Principal = ({navigation}) => {
  const [scanView, setScanView] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.cabacalho}>
        <TouchableOpacity
          style={styles.openDrawer}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon name="bars" size={35} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.title}>QR Code Reader</Text>
      </View>
      {/* Botão para libebar Scanner */}
      <View style={styles.containerBtScanner}>
        <TouchableOpacity
          style={styles.btScan}
          onPress={() => {
            setScanView(true);
          }}>
          <Text>Press Here</Text>
          <Image
            style={styles.imgBtScanner}
            source={require('../../imagens/miraqr.png')}
          />
          <Text>To QR Scan</Text>
        </TouchableOpacity>
      </View>
      <Historico navigation={navigation} />
      {/* Tela do Scanner */}
      {scanView && (
        <View style={styles.containerQrScan}>
          <QrScan onPressButton={() => setScanView(false)} />
        </View>
      )}
    </View>
  );
};

export default Principal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cabacalho: {
    backgroundColor: Colors.turquese,
    flexDirection: 'row',
  },
  openDrawer: {
    padding: 9,
    // backgroundColor: Colors.red,
  },
  title: {
    fontSize: 25,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.white,
  },
  containerBtScanner: {
    alignItems: 'center',
    padding: 10,
  },
  btScan: {
    alignItems: 'center',
    backgroundColor: Colors.champagne,
    padding: 10,
    borderRadius: 10,

    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 6,
  },
  imgBtScanner: {
    width: 50,
    height: 50,
  },
  containerQrScan: {
    position: 'absolute',
    top: 0,
    backgroundColor: Colors.black,
    height: '100%',
    width: '100%',
    elevation: 11,
    alignItems: 'center',
  },
});
