import { View, Text } from 'react-native'
export default function TipsScreen() {
  return (
    <View style={styles.container}> 
      <Text>TipsScreen</Text>
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