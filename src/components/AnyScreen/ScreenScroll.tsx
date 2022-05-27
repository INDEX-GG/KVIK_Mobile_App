import React, {FC, useMemo} from 'react';
import { ScrollView, View } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

interface IScreenScrollProps {
  children: React.ReactChild | React.ReactNode;
  scroll?: boolean;
  customBackground?: string,
}

const ScreenScroll: FC<IScreenScrollProps> = ({
  scroll = true,
  children,
  customBackground = '',
}) => {
  const { theme } = useCurrentTheme();
  const Container = scroll ? ScrollView : View;
  const containerBackground = useMemo(() => (
    customBackground ? customBackground : theme.screenBackground.backgroundColor
  ), [customBackground]);

  return (
    <Container
      style={{
        backgroundColor: theme.screenBackground.backgroundColor,
        flex: 1,
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </Container>
  );
};

export default React.memo(ScreenScroll);
