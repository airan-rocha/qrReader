import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HistoricoItens = ({item, bgColorLink}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.link, {backgroundColor: bgColorLink}]}>
        <Text numberOfLines={1} style={styles.linkContent}>
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
  linkContent: {
    fontSize: 16,
  },
});
