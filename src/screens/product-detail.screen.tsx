import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import PrimaryButton from '../common/PrimaryButton';
import { normal, Text } from '../common/Text';

const ProductDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text type={normal}>ProductDetailScreen</Text>
      <View>

      <PrimaryButton title="Thêm vào giỏ hàng" />
      </View>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
