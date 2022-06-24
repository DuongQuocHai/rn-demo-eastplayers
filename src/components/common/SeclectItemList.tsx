import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import RowCenter from './RowCenter';
import SelectItem from './SelectItem';
import SizeBox from './SizeBox';

export interface IItemSelect {
  id: string;
  name?: string;
  disabled?: boolean;
}

interface SelectItemListProps {
  data: Array<IItemSelect>;
  currentValue?: IItemSelect;
  onSelect?: ({id, name}: IItemSelect) => void;
}

const SelectItemList = ({
  data,
  currentValue,
  onSelect,
}: SelectItemListProps) => {
  const onSelectItem = (item: IItemSelect) => {
    onSelect && onSelect(item);
  };

  return (
    <View style={styles.container}>
      {data.map(item => {
        return (
          <RowCenter key={item.id}>
            <SelectItem
              title={item.name}
              selected={item.id === currentValue?.id}
              disabled={item.disabled}
              onPress={() => onSelectItem(item)}
            />
            <SizeBox width={8} />
          </RowCenter>
        );
      })}
    </View>
  );
};

export default SelectItemList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
