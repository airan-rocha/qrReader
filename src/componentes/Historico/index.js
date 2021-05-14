import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HistoricoItens from './HistoricoItens';
import Colors from '../../styles/Colors';
import {v4 as uuidv4} from 'uuid';
import {setHistory, getHistoryFull, delHistoryFull} from '../../Banco/RealmDB';

const Historico = () => {
  // const DATA = [
  //   {id: 1, link: 'http://google.com'},
  //   {id: 2, link: 'itau.com/1321321321-3213212132132-321318542135416-321321321-.html'},
  //   {id: 3, link: 'juba.com'},
  //   {id: 4, link: `${uuidv4()}`},
  // ];
  const [DATA, setDATA] = useState()
  const [refreshFlatlist, setrefreshFlatlist] = useState(false)
  
  useEffect(() => {
    const loadHistory = async () => {
      const data = await getHistoryFull();
      setDATA(data);
    }
    loadHistory();
  }, [] )

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.title}>Histórico</Text>
        <TouchableOpacity style={styles.btClearAll} onPress={ async () => {
          await delHistoryFull()
          setrefreshFlatlist(true);
          alert('Seu histórico foi deletado com sucesso');
          setrefreshFlatlist(false);
        }}>
          <Icon name="trash" size={35} color={Colors.red} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        refreshing= {refreshFlatlist}
        renderItem={({item}) => (
          <HistoricoItens item={item} bgColorLink="#fffccc" />
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
    backgroundColor: '#f9c2ff',
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
    // backgroundColor: '#ff0',
  },
});
