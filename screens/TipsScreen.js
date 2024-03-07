import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
// import tipsData from '../collection/tips.json';
import TipsComponent from '../components/TipsComponent';

export default function TipsScreen({navigation}) {
 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text 
        onPress={() => navigation.navigate('Home')} 
        style={styles.title}>TipsScreen</Text>
      <TipsComponent />
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
});