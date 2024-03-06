import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import tipsData from '../collection/tips.json';

export default function TipsScreen() {

  const [randomTip, setRandomTip] = useState('');

  useEffect(() => {
// Charger les conseils depuis le fichier JSON
    const loadTips = async () => {
      try {
        // Obtenir la liste des conseils depuis le fichier JSON
        const tips = await tipsData;

        const randomIndex = Math.floor(Math.random() * tips.length);
        const randomTip = tips[randomIndex].texte;
        // Mettre à jour l'état avec le conseil aléatoire
        setRandomTip(randomTip);
      } catch (error) {
        console.error('Erreur lors du chargement des conseils:', error);
      }
    };
    // Appeler la fonction pour charger les conseils
    loadTips();
  }, []); 

  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>TipsScreen</Text>
      <Text>{randomTip}</Text>
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
});

  //   useEffect(() => {
  //   (async () => {
  //     const { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status === 'granted') {
  //       const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
  //       const coordinates = { latitude, longitude };

  //       updateDistances(coordinates);
  //     }
  //   }
  //   )();
  // }, []);