import { StyleSheet } from 'react-native';
import {useCurrentTheme} from "../../../../hooks/useTheme";

const CardAdLikeStyles = () => {
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    likeIcon: {
      position: 'absolute',
      right: 5,
      top: 5,
      zIndex: 10,
    },
    likeIconSvg: {
      color: isDark ? '#FFF': '#000',
    }
  });
};

export const useCardAdLikeStyles = () => CardAdLikeStyles();
