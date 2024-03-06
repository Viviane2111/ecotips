import { StyleSheet, View, Text } from 'react-native'
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
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