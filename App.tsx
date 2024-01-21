import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';
import FlatCards from './components/FlatCards';
import ScrollableCards from './components/ScrollableCards';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatCards />
        <ScrollableCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    minHeight: '100%',
  },
});
