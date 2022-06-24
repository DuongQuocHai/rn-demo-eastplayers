import React, {useState, useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {IMAGES} from '../assets/images';
import RowCenter from '../components/common/RowCenter';
import SizeBox from '../components/common/SizeBox';
import {
  body4,
  body5,
  medium4,
  normal,
  semiBold3,
  semiBold4,
  semiBold5,
  Text,
} from '../components/common/Text';
import AddToCardModalProps from '../components/modal/AddToCardModal';
import BackButton from '../components/product-detail/BackButton';
import FollowButton from '../components/product-detail/FollowButton';
import FooterButton from '../components/product-detail/FooterButton';
import ImageView from '../components/product-detail/ImageView';
import Stars from '../components/product-detail/Stars';
import {PRODUCT_DETAIL} from '../data/ProductDetail';
import {numberWithDot} from '../helpers/format.helper';
import {COLORS} from '../theme/colors';

const UNIT = 'đ';
const TagDiscount = ({percent}: {percent: number}) => {
  return (
    <View style={styles.wrapperTagDiscount}>
      <Text type={semiBold5} style={styles.txtDiscount}>
        {percent}%
      </Text>
    </View>
  );
};

const ButtonInfo = () => {
  return (
    <TouchableOpacity style={styles.btnInfo}>
      <Image source={IMAGES.IC_INFO_PRODUCT} style={{width: 24, height: 24}} />
      <SizeBox width={14} />
      <Text type={medium4} style={styles.txtInfo}>
        Màu, kích thước
      </Text>
      <Entypo name="chevron-right" size={20} color={COLORS.GRAY_5} />
    </TouchableOpacity>
  );
};

const ProductDetailScreen = () => {
  const {
    images,
    percentDiscount,
    price,
    rootPrice,
    name,
    star,
    countRate,
    countSold,
    colors,
    sizes,
  } = PRODUCT_DETAIL;

  const modalRef = useRef();
  const [isFollowed, setIsFollowed] = useState(PRODUCT_DETAIL.isFollowed);
  const toggleFollowed = () => {
    setIsFollowed(!isFollowed);
  };
  const openModalAddToCard = () => {
      modalRef.current?.openModal();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <BackButton style={styles.btnBack} />
        <ImageView images={images} />
        <View style={styles.wrapperInfo}>
          <RowCenter style={styles.flexRow}>
            <TagDiscount percent={percentDiscount} />
            <SizeBox width={12} />
            <Text type={semiBold3}>
              {numberWithDot(price)}
              {UNIT}
            </Text>
            <SizeBox width={6} />
            <Text type={body5} style={styles.txtRootPrice}>
              {numberWithDot(rootPrice)}
            </Text>
          </RowCenter>
          <SizeBox height={12} />
          <Text type={body4} style={styles.txtName}>
            {name}
          </Text>
          <SizeBox height={8} />
          <RowCenter>
            <Stars contStar={star} length={5} />
            <SizeBox width={8} />
            <RowCenter style={styles.flex1}>
              <Text type={body5} style={styles.textGray}>
                {countRate}
              </Text>
              <Entypo name="dot-single" color={COLORS.GRAY_4} size={12} />
              <Text type={body5} style={styles.textGray}>
                Đã bán {countSold}
              </Text>
            </RowCenter>
            <FollowButton isFollowed={isFollowed} onPress={toggleFollowed} />
          </RowCenter>
        </View>
        <View style={styles.wrapperButtonInfo}>
          <ButtonInfo />
        </View>
      </ScrollView>
      <FooterButton
        isFollowed={isFollowed}
        onToggleFollow={toggleFollowed}
        onPress={openModalAddToCard}
      />
      <AddToCardModalProps
        colors={colors}
        sizes={sizes}
        isFollowed={isFollowed}
        onToggleFollow={toggleFollowed}
        ref={modalRef}
      />
      <SafeAreaView />
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  textGray: {color: COLORS.GRAY_4},
  flex1: {flex: 1},
  flexRow: {flexDirection: 'row', alignItems: 'flex-end'},
  container: {
    flex: 1,
  },
  btnBack: {
    position: 'absolute',
    top: 55,
    left: 20,
    zIndex: 99,
  },
  wrapperInfo: {paddingHorizontal: 16, paddingVertical: 20},
  wrapperTagDiscount: {
    paddingHorizontal: 8,
    backgroundColor: COLORS.RED_1,
    alignSelf: 'flex-start',
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  txtDiscount: {color: COLORS.WHITE},
  txtRootPrice: {color: COLORS.GRAY_5, textDecorationLine: 'line-through'},
  txtName: {lineHeight: 22},
  wrapperButtonInfo: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.GRAY_9,
  },
  btnInfo: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 18.5,
    borderRadius: 8,
  },
  txtInfo: {
    flex: 1,
  },
});
