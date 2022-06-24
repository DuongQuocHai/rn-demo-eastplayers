export const mapPropertiesActive = (
  listDefault: Array<any>,
  list: Array<any>,
) => {
  return listDefault.map(item => {
    let disabled = list.findIndex(el => el?.id === item?.id) === -1;
    return {...item, disabled};
  });
};
