import {StyleSheet, Text, View} from 'react-native';
const FlatCards = () => {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.content}>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text style={styles.content}>Green</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.content}>Blue</Text>
        </View>
      </View>
    </View>
  );
};
export default FlatCards;
const styles = StyleSheet.create({
  heading: {
    padding: 10,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  card1: {
    backgroundColor: '#e74c3c',
  },
  card2: {
    backgroundColor: '#1abc9c',
  },
  card3: {
    backgroundColor: '#3498db',
  },
  content: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
