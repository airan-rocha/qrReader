import React from 'react';
import {StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import Color from '../../styles/Colors';

const ConfirmDialog = ({mensagem, confirmPress, cancelPress, bgStyle}) => {
  return (
    <View style={[styles.container, bgStyle]}>
      <View style={styles.caixa}>
        <Text style={styles.mensagem}>{mensagem}</Text>
        <View style={styles.opcoes}>
          <Button title={'Confirmar'} onPress={confirmPress} />
          <View style={styles.divisoria} />
          <Button title={'Cancelar'} onPress={cancelPress} />
        </View>
      </View>
    </View>
  );
};

export default ConfirmDialog;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    padding: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000ab',
    elevation: 7,
  },
  caixa: {
    backgroundColor: Color.champagne,
    padding: 15,
    borderRadius: 10,
  },
  mensagem: {
    fontSize: 16,
    marginBottom: 13,
  },
  opcoes: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  divisoria: {
    width: 50,
  },
});
