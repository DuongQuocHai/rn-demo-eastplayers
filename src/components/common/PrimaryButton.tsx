import * as React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import { IMAGES } from '../../assets/images';
import { COLORS } from '../../theme/colors';
import {Text} from './Text';

interface PrimaryButtonProps {
  title: string;
}

const PrimaryButton = ({title}: PrimaryButtonProps) => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.IC_BUTTON_LEFT} style={[styles.icButton, {left: 0}]}/>
      <Text type="headlineNormal" style={styles.title}>
        {title.toLocaleUpperCase()}
      </Text>
      <Image source={IMAGES.IC_BUTTON_RIGHT} style={[styles.icButton, {right: 0}]}/>
    </View>
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
  icButton: {position: 'absolute', top: 0, bottom: 0, zIndex: -1}
});
