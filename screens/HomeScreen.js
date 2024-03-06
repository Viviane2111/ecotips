import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import getTips from '../collection/ecotips';

export default function HomeScreen() {

const [randomTip, setRandomTip] = useState('');

useEffect(() => {
  // const tip = getTips();
  setRandomTip(getTips());
}, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>HOME</Text>
      <Text style={styles.tips}>{randomTip}</Text>
      <Text>BLABLABLA</Text>
    </View>
  )
}

//  style={styles.container}
const styles = StyleSheet.create({
   container: {
		flex: 1,
		backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
  title: {
    fontSize: 50,
  },
  tips: {
    width: "80%",
    fontSize: 20,
    marginTop: 60,
    marginBottom: 30,
  },
});