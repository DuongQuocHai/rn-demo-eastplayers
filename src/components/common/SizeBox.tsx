import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

interface SizeBoxProps {
  height?: number;
  width?: number;
  style?: StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
}

const SizeBox = ({height, width, style}: SizeBoxProps) => {
  return <View style={[{height, width}, style]} />;
};

export default SizeBox;
