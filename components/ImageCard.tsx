import {Image, StyleSheet, Text, View} from 'react-native';
const ImageCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/12564779/pexels-photo-12564779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            width: '100%',
            height: 200,
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Victorial Memorial</Text>
          <Text style={styles.cardLocation}>Kolkata, India</Text>
          <Text style={styles.cardDesc}>
            The Victoria Memorial in Kolkata, India, is an iconic marble
            structure built in memory of Queen Victoria, showcasing colonial
            grandeur.
          </Text>
          <Text style={styles.cardDistance}>4km Away</Text>
        </View>
      </View>
    </View>
  );
};
export default ImageCard;
const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  card: {
    backgroundColor: '#130f40',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardBody: {
    padding: 12,
  },
  cardTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  cardLocation: {color: 'white', fontStyle: 'italic', marginVertical: 6},
  cardDesc: {color: 'white'},
  cardDistance: {color: 'white', marginTop: 6},
});
