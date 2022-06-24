import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../theme/colors';
interface FollowButtonProps {
  isFollowed: boolean;
  size?: number;
  onPress: () => void;
}

const FollowButton = ({isFollowed, size = 32, onPress}: FollowButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container(isFollowed, size)}
      onPress={onPress}>
      <Entypo
        name={isFollowed ? 'heart' : 'heart-outlined'}
        color={isFollowed ? COLORS.WHITE : COLORS.GRAY_4}
        size={size / 1.6}
      />
    </TouchableOpacity>
  );
};

export default FollowButton;

const styles = StyleSheet.create({
  container: (isFollowed, size) => ({
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: size / 2,
    backgroundColor: isFollowed ? COLORS.YELLOW_1 : COLORS.GRAY_8,
  }),
});
