import * as React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {COLORS} from '../../theme/colors';
import {medium5, Text} from '../common/Text';

interface PaginationProps {
  length: number;
  currentIndex: number;
  style?: StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
}

const Pagination = ({length, currentIndex, style}: PaginationProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text
        type={medium5}
        style={styles.text}>{`${currentIndex}/${length}`}</Text>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GRAY_DARK_RGBA,
    paddingHorizontal: 8,
    borderRadius: 40,
    height: 20,
    justifyContent: 'center',
  },
  text: {
    color: COLORS.WHITE,
  },
});
