import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../../styles/Colors';

const Principal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.openDrawer}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Text>Menu</Text>
      </TouchableOpacity>
      <Text>Principal</Text>
    </View>
  );
};

export default Principal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  openDrawer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: Colors.turquese,
  },
});
