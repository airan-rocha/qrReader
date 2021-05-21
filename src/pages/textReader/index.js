import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/dist/Feather';
import Colors from '../../styles/Colors';

const TextReader = ({route, navigation}) => {
  const {dataText} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.title}>Simple Text - qrReader</Text>
      </View>
      <View style={styles.textArea}>
        {/* <TextInput
          style={styles.text}
          value={dataText}
          multiline={true}
          editable={true}
        /> */}
        <ScrollView>
          <Text style={styles.text}>{dataText}</Text>
        </ScrollView>
        <View style={styles.containerBt}>
          <TouchableOpacity
            style={styles.btCopyToClipboard}
            onPress={() => Clipboard.setString(dataText)}>
            <Icon name="copy" size={30} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TextReader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cabecalho: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  textArea: {
    flex: 1,
    backgroundColor: Colors.yellowOpaco,
    padding: 10,
  },
  text: {
    flex: 1,
    textAlignVertical: 'top',
    color: Colors.black,
    fontSize: 17,
  },
  containerBt: {
    alignItems: 'flex-end',
  },
  btCopyToClipboard: {
    width: 60,
    height: 60,
    backgroundColor: Colors.turquese,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    marginBottom: 15,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
