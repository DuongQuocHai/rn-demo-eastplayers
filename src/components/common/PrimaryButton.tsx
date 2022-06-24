import * as React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {IMAGES} from '../../assets/images';
import {COLORS} from '../../theme/colors';
import {boldNormal, Text} from './Text';

interface PrimaryButtonProps {
  title: string;
  style?: StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
  onPress: () => void;
}

const PrimaryButton = ({title, style, onPress}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image
        source={IMAGES.IC_BUTTON_LEFT}
        style={[styles.icButton, {left: 0}]}
      />
      <Text type={boldNormal} style={styles.title}>
        {title.toLocaleUpperCase()}
      </Text>
      <Image
        source={IMAGES.IC_BUTTON_RIGHT}
        style={[styles.icButton, {right: 0}]}
      />
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    height: 43,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    minWidth: 150,
  },
  title: {
    color: COLORS.WHITE,
  },
  icButton: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: -1,
    tintColor: COLORS.GRAY_2,
  },
});
