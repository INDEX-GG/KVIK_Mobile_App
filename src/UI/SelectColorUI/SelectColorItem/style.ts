import { StyleSheet } from 'react-native';

const SelectColorItemStyles = (backgroundColor: string) => {
  const size = 28;
  return StyleSheet.create({
    container: {
      marginBottom: 8,
      marginRight: 2,
    },
    colorItem: {
      width: size,
      height: size,
      backgroundColor: backgroundColor,
      borderRadius: size / 2,
    },
  });
};

export const useSelectColorItemStyles = (backgroundColor: string) =>
  SelectColorItemStyles(backgroundColor);
