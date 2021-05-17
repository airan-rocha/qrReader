import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Colors from '../../styles/Colors';

const TextReader = ({route, navigation}) => {
  const {dataText} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Text - qrReader</Text>
      <View style={styles.textArea}>
        <Text style={styles.text}>{dataText}</Text>
      </View>
      <TouchableOpacity
        style={styles.btCopyToClipboard}
        onPress={() => Clipboard.setString(dataText)}>
        <Text>Copiar para Área de Tranferência</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextReader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  textArea: {
    flex: 1,
    backgroundColor: Colors.yellowOpaco,
    padding: 10,
  },
  text: {
    color: '#000',
    fontSize: 17,
  },
  btCopyToClipboard: {},
});
