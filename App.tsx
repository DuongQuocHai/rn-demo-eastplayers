import * as React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ProductDetailScreen from './src/screens/product-detail.screen';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <ProductDetailScreen />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
