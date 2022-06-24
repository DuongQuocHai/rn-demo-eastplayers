import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../theme/colors';
import RowCenter from '../common/RowCenter';
import SizeBox from '../common/SizeBox';
interface StarsProps {
  contStar: number;
  length: number;
  style?: StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
}

const Stars = ({contStar, length, style}: StarsProps) => {
  const array = new Array(length).fill(0);
  return (
    <RowCenter style={style}>
      {array.map((e, i) => {
        return (
          <RowCenter key={i.toString()}>
            <AntDesign
              name="star"
              color={i <= contStar - 1 ? COLORS.YELLOW_1 : COLORS.GRAY_5}
              size={14}
            />
            {i < length - 1 && <SizeBox width={4} />}
          </RowCenter>
        );
      })}
    </RowCenter>
  );
};

export default Stars;
