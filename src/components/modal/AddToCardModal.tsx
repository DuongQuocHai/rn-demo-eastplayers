import React, {forwardRef, useImperativeHandle, useMemo} from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {COLORS} from '../../theme/colors';
import RowCenter from '../common/RowCenter';
import {body5, bold3, medium5, Text} from '../common/Text';
import FooterButton from '../product-detail/FooterButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SizeBox from '../common/SizeBox';
import SelectItem from '../common/SelectItem';
import useMergeState from '../../hooks/useMergeState';
import {IProductDetail} from '../../data/ProductDetail';
import {
  LIST_COLORS,
  IColorProduct,
  ISizeProduct,
  LIST_SIZES,
} from '../../data/constant';
import SelectItemList, {IItemSelect} from '../common/SeclectItemList';
import {mapPropertiesActive} from '../../helpers/product.helper';
import Feather from 'react-native-vector-icons/Feather';

interface AddToCardModalProps {
  colors: Array<IColorProduct>;
  sizes: Array<ISizeProduct>;
  isFollowed: boolean;
  onToggleFollow: () => void;
  onAddToCard: () => void;
}

interface SectionProps {
  title: string;
  children?: React.ReactNode;
}

const Section = ({title, children}: SectionProps) => {
  return (
    <View>
      <Text type={medium5}>{title.toLocaleUpperCase()}</Text>
      <SizeBox height={12} />
      {children}
    </View>
  );
};

const IconButton = ({
  nameIcon,
  onPress,
  disabled,
}: {
  nameIcon: string;
  onPress: () => void;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      style={styles.btnIconButton(disabled)}
      disabled={disabled}
      onPress={onPress}>
      <Feather name={nameIcon} size={20} />
    </TouchableOpacity>
  );
};

const SectionAmount = ({
  onMinus,
  onPlus,
  amount,
}: {
  onMinus: () => void;
  onPlus: () => void;
  amount: number;
}) => {
  return (
    <RowCenter>
      <Text type={medium5}>SỐ LƯỢNG</Text>
      <SizeBox style={styles.flex1} />
      <RowCenter>
        <IconButton nameIcon="minus" onPress={onMinus} disabled={amount <= 1} />
        <SizeBox width={8} />
        <SelectItem title={amount.toString()} style={{width: 50}} />
        <SizeBox width={8} />
        <IconButton nameIcon="plus" onPress={onPlus} />
      </RowCenter>
    </RowCenter>
  );
};

const AddToCardModal = (
  {colors, sizes, isFollowed, onToggleFollow, onAddToCard}: AddToCardModalProps,
  ref,
) => {
  const [state, setState] = useMergeState({
    isVisible: false,
    color: null,
    size: null,
    amount: 1,
  });

  const listColors = useMemo(
    () => mapPropertiesActive(LIST_COLORS, colors),
    [],
  );
  const listSizes = useMemo(() => mapPropertiesActive(LIST_SIZES, sizes), []);

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  const closeModal = () => {
    setState({isVisible: false});
  };

  const openModal = () => {
    setState({isVisible: true});
  };

  const onSelect = (item: IItemSelect, key: string) => {
    setState({[key]: item});
  };

  const onPlus = () => {
    setState({amount: state.amount + 1});
  };
  const onMinus = () => {
    setState({amount: state.amount - 1});
  };

  const addToCard = () => {
    closeModal();
  };

  return (
    <Modal
      isVisible={state.isVisible}
      style={styles.modal}
      useNativeDriver={true}
      statusBarTranslucent={true}
      backdropColor={'rgba(15, 23, 42, 0.5)'}
      onBackButtonPress={closeModal}
      backdropOpacity={1}
      onBackdropPress={closeModal}>
      <View style={styles.container}>
        <RowCenter style={styles.wrapperTitle}>
          <Text type={bold3}>Chọn phân loại</Text>
          <SizeBox style={styles.flex1} />
          <TouchableOpacity style={styles.btnClose} onPress={closeModal}>
            <Ionicons name="close" size={16} color />
          </TouchableOpacity>
        </RowCenter>
        <View style={styles.wrapperContent}>
          <Section title="Màu sắc">
            <SelectItemList
              data={listColors}
              currentValue={state.color}
              onSelect={item => onSelect(item, 'color')}
            />
          </Section>
          <SizeBox height={24} />
          <Section title="Kích thước">
            <SelectItemList
              data={listSizes}
              currentValue={state.size}
              onSelect={item => onSelect(item, 'size')}
            />
          </Section>
          <SizeBox height={36} />
          <SectionAmount
            onPlus={onPlus}
            onMinus={onMinus}
            amount={state.amount}
          />
        </View>
        <FooterButton
          isFollowed={isFollowed}
          onToggleFollow={onToggleFollow}
          onPress={addToCard}
        />
        <SafeAreaView />
      </View>
    </Modal>
  );
};

export default forwardRef(AddToCardModal);

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
  btnClose: {paddingHorizontal: 8},
  wrapperContent: {
    padding: 16,
  },
  btnIconButton: (disabled: boolean) => ({
    width: 56,
    height: 40,
    backgroundColor: COLORS.GRAY_9,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: disabled ? 0.3 : 1,
  }),
});
