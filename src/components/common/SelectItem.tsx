import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SelectItemProps {}

const SelectItem = (props: SelectItemProps) => {
  return (
    <View style={styles.container}>
      <Text>SelectItem</Text>
    </View>
  );
};

export default SelectItem;

const styles = StyleSheet.create({
  container: {
    height: 40,
    minWidth: 40,
    borderWidth: 1,
  }
});
