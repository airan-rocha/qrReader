import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Linking} from 'react-native';

const HistoricoItens = ({navigation, item, bgColorLink}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.link, {backgroundColor: bgColorLink}]}
        onPress={async () => {
          if (item.type === 'link') {
            await Linking.openURL(item.info).catch(e => console.error(e));
          } else {
            navigation.navigate('TextReader', {dataText: item.info});
          }
        }}>
        <Text numberOfLines={1} style={styles.itemContent}>
          {item.info}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HistoricoItens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  link: {
    flex: 1,
    fontSize: 19,
    paddingVertical: 5,
  },
  itemContent: {
    fontSize: 16,
  },
});
