import React, {useMemo} from 'react';
import {TouchableOpacity, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {COLORS} from '../../theme/colors';
import {medium, semiBold} from '../../theme/typography';
import {normal, Text} from './Text';

interface SelectItemProps {
  title?: string;
  selected?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
}

const SelectItem = ({
  title,
  selected,
  disabled,
  onPress,
  style,
}: SelectItemProps) => {
  const styleItem = useMemo(() => {
    let container = styles.container;
    let title = styles.txtTitle;
    if (selected) {
      container = {...container, borderColor: COLORS.GRAY_1};
      title = {...title, fontFamily: semiBold};
    } else if (disabled) {
      container = {...container, borderColor: COLORS.GRAY_6};
      title = {...title, fontFamily: medium, color: COLORS.GRAY_6};
    }
    return {container, title};
  }, [selected, disabled]);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styleItem.container, style]}
      disabled={disabled}
      onPress={onPress}>
      <Text type={normal} style={styleItem.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectItem;

const styles = StyleSheet.create({
  container: {
    height: 40,
    minWidth: 40,
    borderWidth: 1,
    borderColor: COLORS.GRAY_6,
    backgroundColor: COLORS.WHITE,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
