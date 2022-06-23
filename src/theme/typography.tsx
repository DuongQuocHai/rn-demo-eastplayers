import {StyleProp, TextStyle} from 'react-native';
import {COLORS} from './colors';

const fontFamilyRegular = 'Inter-Regular';
const fontFamilyBold = 'Inter-Bold';
const textColor = COLORS.TEXT_DARK;

type ITypography = {
  [key: string]: StyleProp<TextStyle>;
};

const typography: ITypography = {
  headlineNormal: {
    fontFamily: fontFamilyBold,
    fontSize: 14,
    color: textColor,
  },
  headline4: {
    fontFamily: fontFamilyBold,
    fontSize: 16,
    color: textColor,
  },
  normal: {
    fontFamily:fontFamilyRegular,
    fontSize: 14,
    color: textColor,
  },
  body4: {
    fontFamily:fontFamilyRegular,
    fontSize: 16,
    color: textColor,
  },
  body5: {
    fontFamily:fontFamilyRegular,
    fontSize: 12,
    color: textColor,
  },
};

export default typography;
