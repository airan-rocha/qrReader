import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import Colors from '../../styles/Colors';

const TextReader = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <TouchableOpacity
          style={styles.btGoBack}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={35} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.title}>Sobre o App</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgLogo}
            source={require('../../imagens/frame2.png')}
          />
        </View>
        <Text style={styles.text}>
          O qrReader é uma aplicação simples de código aberto para a leitura de
          Qr Codes.
        </Text>
        <Text style={styles.text}>
          Não pense que por ser simples essa aplicação não cumpre o que promete.
          Além de scanear os QR Codes, ela deixa tudo salvo em um histórico que
          pode ser facilmente acessado e removido a qualquer hora.
        </Text>
        <Text style={styles.text}>O código fonte está disponível em:</Text>
        <TouchableOpacity
          style={styles.link}
          onPress={() =>
            Linking.openURL('https://github.com/airan-rocha/qrReader')
          }>
          <Text style={styles.linkText}>
            https://github.com/airan-rocha/qrReader
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextReader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cabecalho: {
    flexDirection: 'row',
    backgroundColor: Colors.turquese,
  },
  btGoBack: {
    padding: 9,
  },
  title: {
    fontSize: 25,
    marginRight: 30,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.white,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  imgContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  imgLogo: {
    height: 150,
    width: 150,
  },
  text: {
    textAlignVertical: 'top',
    textAlign: 'justify',
    color: Colors.black,
    fontSize: 17,
    marginBottom: 15,
  },
  link: {
    alignItems: 'center',
  },
  linkText: {
    color: Colors.blueDark,
    fontSize: 15,
    paddingVertical: 10,
  },
});
