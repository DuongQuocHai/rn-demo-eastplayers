// Possible value for prop "type" for Text
import React from 'react';
import {
  Text as RNText,
  StyleSheet,
  StyleProp,
  TextProps,
  TextStyle,
} from 'react-native';
import typography from '../../theme/typography';

export const normal='normal' //14
export const boldNormal='boldNormal' //14
export const mediumNormal='mediumNormal' //14
export const semiBoldNormal='semiBoldNormal' //14
export const body1='body1' //24
export const bold1='bold1' //24
export const medium1='medium1' //24
export const semiBold1='semiBold1' //24
export const body2='body2' //20
export const bold2='bold2' //20
export const medium2='medium2' //20
export const semiBold2='semiBold2' //20
export const body3='body3' //16
export const bold3='bold3' //16
export const medium3='medium3' //16
export const semiBold3='semiBold3' //16
export const body4='body4' //14
export const bold4='bold4' //14
export const medium4='medium4' //14
export const semiBold4='semiBold4' //14
export const body5='body5' //12
export const bold5='bold5' //12
export const medium5='medium5' //12
export const semiBold5='semiBold5' //12

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
