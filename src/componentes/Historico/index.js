import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HistoricoItens from './HistoricoItens';
import Colors from '../../styles/Colors';
import {getHistoryFull, delHistoryFull} from '../../Banco/RealmDB';
import ConfirmDialog from '../ConfirmDialog';

const Historico = ({navigation}) => {
  const [DATA, setDATA] = useState();
  const [refreshFlatlist, setrefreshFlatlist] = useState(false);
  const [confirmDialogView, setConfirmDialogView] = useState(false);

  useEffect(() => {
    const loadHistory = async () => {
      const data = await getHistoryFull();
      setDATA(data);
    };
    loadHistory();
  }, []);

  const refreshHistory = () => {
    setrefreshFlatlist(true);
    // após atualizar a lista, o refreshFlatlist volta ao seu valor inicial.
    setrefreshFlatlist(false);
  };

  const limparHistorico = async () => {
    await delHistoryFull();
    refreshHistory();
    setConfirmDialogView(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.title}>Histórico</Text>
        <TouchableOpacity
          style={styles.btClearAll}
          onPress={() => setConfirmDialogView(true)}>
          <Icon name="trash" size={35} color={Colors.red} />
        </TouchableOpacity>
      </View>

      {confirmDialogView && (
        <ConfirmDialog
          mensagem={'Limpeza do Histórico!\nEssa ação não poderá ser desfeita!'}
          confirmPress={() => limparHistorico()}
          cancelPress={() => setConfirmDialogView(false)}
          bgStyle={{top: -247}}
        />
      )}

      <FlatList
        data={DATA}
        refreshing={refreshFlatlist}
        renderItem={({item}) => (
          <HistoricoItens
            item={item}
            bgColorLink="#ffffff78"
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Historico;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cabecalho: {
    flexDirection: 'row',
    borderBottomColor: Colors.dark,
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    flex: 1,
  },
  btClearAll: {
    paddingLeft: 40,
  },
});
