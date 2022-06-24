export const numberWithDot = (value: number) => {
  const str = value.toString();
  return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};
