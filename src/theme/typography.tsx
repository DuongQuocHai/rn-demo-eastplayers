import {StyleProp, TextStyle} from 'react-native';
import {COLORS} from './colors';

export const regular = 'Inter-Regular';
// export const bold = 'Inter-Bold';
export const medium = 'Inter-Medium';
export const semiBold = 'Inter-SemiBold';
 const textColor = COLORS.TEXT_DARK;

type ITypography = {
  [key: string]: StyleProp<TextStyle>;
};
const textNormal = {
  fontSize: 14,
  color: textColor,
};
const text1 = {
  fontSize: 24,
  color: textColor,
};
const text2 = {
  fontSize: 20,
  color: textColor,
};
const text3 = {
  fontSize: 16,
  color: textColor,
};
const text4 = {
  fontSize: 14,
  color: textColor,
};
const text5 = {
  fontSize: 12,
  color: textColor,
};
const typography: ITypography = {
  normal: {
    ...textNormal,
    fontFamily: regular,
  },
  boldNormal: {
    ...textNormal,
    fontFamily: regular,
    fontWeight: '600',
  },
  mediumNormal: {
    ...textNormal,
    fontFamily: medium,
  },
  semiBoldNormal: {
    ...textNormal,
    fontFamily: semiBold,
  },

  body1: {
    ...text1,
    fontFamily: regular,
  },
  bold1: {
    ...text1,
    fontFamily: regular,
    fontWeight: '600',
  },
  medium1: {
    ...text1,
    fontFamily: medium,
  },
  semiBold1: {
    ...text1,
    fontFamily: semiBold,
  },

  body2: {
    ...text2,
    fontFamily: regular,
  },
  bold2: {
    ...text2,
    fontFamily: regular,
    fontWeight: '600',
  },
  medium2: {
    ...text2,
    fontFamily: medium,
  },
  semiBold2: {
    ...text2,
    fontFamily: semiBold,
  },

  body3: {
    ...text3,
    fontFamily: regular,
  },
  bold3: {
    ...text3,
    fontFamily: regular,
    fontWeight: '600',
  },
  medium3: {
    ...text3,
    fontFamily: medium,
  },
  semiBold3: {
    ...text3,
    fontFamily: semiBold,
  },

  body4: {
    ...text4,
    fontFamily: regular,
  },
  bold4: {
    ...text4,
    fontFamily: regular,
    fontWeight: '600',
  },
  medium4: {
    ...text4,
    fontFamily: medium,
  },
  semiBold4: {
    ...text4,
    fontFamily: semiBold,
  },

  body5: {
    ...text5,
    fontFamily: regular,
  },
  bold5: {
    ...text5,
    fontFamily: regular,
    fontWeight: '600',
  },
  medium5: {
    ...text5,
    fontFamily: medium,
  },
  semiBold5: {
    ...text5,
    fontFamily: semiBold,
  },
};

export default typography;
