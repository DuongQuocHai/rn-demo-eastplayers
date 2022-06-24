import * as React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import PrimaryButton from '../common/PrimaryButton';
import RowCenter from '../common/RowCenter';
import SizeBox from '../common/SizeBox';
import FollowButton from './FollowButton';

interface FooterButtonProps {
  isFollowed: boolean;
  onToggleFollow: () => void;
  onPress: () => void;
}

const FooterButton = ({
  isFollowed,
  onToggleFollow,
  onPress,
}: FooterButtonProps) => {
  return (
    <View
      style={styles.container}>
      <RowCenter style={styles.wrapperButton}>
        <FollowButton
          isFollowed={isFollowed}
          onPress={onToggleFollow}
          size={43}
        />
        <SizeBox width={10} />
        <PrimaryButton
          title="Thêm vào giỏ hàng"
          style={styles.flex1}
          onPress={onPress}
        />
      </RowCenter>
    </View>
  );
};

export default FooterButton;

const styles = StyleSheet.create({
  flex1: {flex: 1},
  container:{
    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  wrapperButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
