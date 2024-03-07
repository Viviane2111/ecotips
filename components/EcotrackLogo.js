import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';

export default function EcotrackLogo() {
   return (
      <><View>
         <Image
            source={require("../assets/Ecotrack-logo.png")}
            style={{
               width: 250,
               height: 250,
            }}
         />
         <Text 
            style={{
               fontSize: 26,
               textAlign: "center",
               fontWeight: "700",
            }} 
         >
            ECOTRACK
         </Text>
      </View></>
   )
}