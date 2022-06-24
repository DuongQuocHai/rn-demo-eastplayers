import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {COLORS} from '../../theme/colors';
import RowCenter from '../common/RowCenter';
import {headline4, Text} from '../common/Text';
import FooterButton from '../product-detail/FooterButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SizeBox from '../common/SizeBox';
import SelectItem from '../common/SelectItem';
interface AddProductModalProps {}

const AddProductModal = (props: AddProductModalProps) => {
  return (
    <Modal
      isVisible={true}
      style={styles.modal}
      useNativeDriver={true}
      statusBarTranslucent={true}
      hideModalContentWhileAnimating={true}
      //   onBackButtonPress={onBackPress}
      //   onBackdropPress={onBackPress}
      //   backdropColor={'rgba(15, 23, 42, 0.5)'}
        backdropColor={'#000'}
        backdropOpacity={1}
    >
      <View style={styles.container}>
        <RowCenter style={styles.wrapperTitle}>
          <Text type={headline4}>Chọn phân loại</Text>
          <SizeBox style={styles.flex1} />
          <TouchableOpacity
            style={{backgroundColor: 'red', paddingHorizontal: 8}}>
            <Ionicons name="close" size={16} />
          </TouchableOpacity>
        </RowCenter>
        <View>
            <SelectItem/>
        </View>
        {/* <FooterButton /> */}
      </View>
    </Modal>
  );
};

export default AddProductModal;

const styles = StyleSheet.create({
  flex1: {flex: 1},
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: COLORS.WHITE,
  },
  wrapperTitle: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_8,
  },
});
