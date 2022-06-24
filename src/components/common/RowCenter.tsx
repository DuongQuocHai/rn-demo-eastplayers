import * as React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface RowCenterProps {
  style?: StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
  children: React.ReactNode;
}

const RowCenter = ({style, children}: RowCenterProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default RowCenter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
