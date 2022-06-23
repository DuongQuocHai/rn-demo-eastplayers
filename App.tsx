import * as React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import ProductDetailScreen from './src/screens/product-detail.screen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <ProductDetailScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
