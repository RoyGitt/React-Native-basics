import {ScrollView, StyleSheet, Text, View} from 'react-native';
const ScrollableCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Scrollable Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardText}>⏩</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>You</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>can</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>scroll</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>me</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>😎</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>👈</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default ScrollableCards;
const styles = StyleSheet.create({
  heading: {
    padding: 10,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#192a56',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    margin: 10,
  },
  cardText: {
    color: 'white',
  },
});
