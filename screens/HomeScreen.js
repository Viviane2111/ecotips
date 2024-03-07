import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import getTips from '../collection/ecotips';
import EcotrackLogo from '../components/EcotrackLogo';

export default function HomeScreen({navigation}) {

const [randomTip, setRandomTip] = useState('');

useEffect(() => {
  // const tip = getTips();
  setRandomTip(getTips());
}, []);

  return (
    <View style={styles.container}>
      <EcotrackLogo />
      <StatusBar style="auto" />
      <Text style={styles.title} onPress={() => navigation.navigate('Tips')}>HOME</Text>
      {/* <Text style={styles.tips}>{randomTip}</Text> */}
      <Text>Go TIPS</Text>
    </View>
  )
}

//  style={styles.container}
const styles = StyleSheet.create({
   container: {
		flex: 1,
    gap: 50,
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