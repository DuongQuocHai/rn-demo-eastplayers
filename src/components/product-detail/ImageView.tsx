import React, {useState} from 'react';
import {Image, View, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {IImage} from '../../data/ProductDetail';
import Pagination from './Pagination';

interface ImageViewProps {
  images: Array<IImage>;
}

const WINDOW_WIDTH = Dimensions.get('window').width;
const HEIGHT_VIEW = 385;
const ImageView = ({images}: ImageViewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const renderItem = ({item}) => (
    <Image source={item.url} style={styles.image} resizeMode="cover" />
  );
  return (
    <View style={styles.container}>
      <Carousel
        width={WINDOW_WIDTH}
        height={HEIGHT_VIEW}
        data={images}
        renderItem={renderItem}
        onSnapToItem={setCurrentIndex}
      />
      <View style={styles.wrapperPagination}>
        <Pagination length={images.length} currentIndex={currentIndex + 1} />
      </View>
    </View>
  );
};

export default ImageView;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT_VIEW,
  },
  image: {width: '100%', height: '100%'},
  wrapperPagination: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
    alignItems: 'center',
  },
});
