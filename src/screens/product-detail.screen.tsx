import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {ProductDetail} from '../data/ProductDetail';
import { normal, Text } from '../components/common/Text';
import PrimaryButton from '../components/common/PrimaryButton';
import ImageView from '../components/product-detail/ImageView';
import BackButton from '../components/product-detail/BackButton';

const ProductDetailScreen = () => {
  const {images} = ProductDetail;
  return (
    <View style={styles.container}>
      <BackButton style={styles.btnBack} />
      <ImageView images={images} />
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
  },
  btnBack: {
    position: 'absolute',
    top: 55,
    left: 20,
    zIndex: 99
  }
});
