// Possible value for prop "type" for Text
import React from 'react';
import {
  Text as RNText,
  StyleSheet,
  StyleProp,
  TextProps,
  TextStyle,
} from 'react-native';
import typography from '../theme/typography';
export const headline4 = 'headline4';
export const headlineNormal = 'headlineNormal';
export const body4 = 'body4';
export const body5 = 'body5';
export const normal = 'normal';

interface ITextProps extends TextProps {
  type: string;
  style?: StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
  children?: React.ReactNode;
}

const Text: React.FC<ITextProps> = ({type, style, children, ...props}) => {
  return (
    <RNText style={StyleSheet.flatten([typography[type], style])} {...props}>
      {children}
    </RNText>
  );
};

export {Text};
