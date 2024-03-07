import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
// import { faPersonBiking, faBolt, faBurger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesome } from "@expo/vector-icons";
import tipsData from '../collection/tips.json';

export default function TipsComponent({navigation}) {

   const [randomTip, setRandomTip] = useState('');

   useEffect(() => {
      // Charger les tips depuis le fichier JSON
      const loadTips = async () => {
         try {
            // Obtenir la liste des tips depuis le fichier JSON
            const tips = await tipsData;
   
            const randomIndex = Math.floor(Math.random() * tips.length);
            const randomTip = tips[randomIndex].texte;
            // Mettre à jour l'état avec le conseil aléatoire
            setRandomTip(randomTip);
         } catch (error) {
            console.error('Erreur lors du chargement des tips:', error);
         }
      };
      // Appeler la fonction pour charger les tips
      loadTips();
   }, []);

   return (
      <View style={styles.container}>
            <View>
               <FontAwesome style={styles.reload} name="repeat" size={24} color="black" />
            </View>
         <ScrollView >
            <View style={styles.tipsContainer}>
               <Text style={styles.tips}>{randomTip}</Text>
            </View>
         </ScrollView>
      </View>
   );
}

//  style={styles.tipsContainer}
const styles = StyleSheet.create({
   container: {
		// flex: 1,
      width: "80%",
      height: 150,

	   // alignItems: 'center',
	   // justifyContent: 'center',
      marginTop: 30,
	},
   reload: {
      textAlign: "right",
      color: "green",
      top: 2,
      right: -15,
   },
   tipsContainer: {
      borderWidth: 2,
      borderColor: "green",
		backgroundColor: 'lightgreen',
   },
   tips: {
      fontSize: 20,
  },
});