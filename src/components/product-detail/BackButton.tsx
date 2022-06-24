import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../theme/colors';
interface BackButtonProps {
  style?: StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
}

const BackButton = ({style}: BackButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Entypo name="chevron-left" size={24} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: 33,
    height: 33,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
