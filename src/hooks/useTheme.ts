import { useAppSelector } from './useAppSelector';
import { useMemo } from 'react';
import { themeSlice } from '../store/reducers/themeSlice/themeSlice';
import { useAppDispatch } from './useAppDispatch';
import { anyThem } from '../theme/theme';

export const useCurrentTheme = () => {
  const { theme, themeName } = useAppSelector((state) => state.themeReducer);
  const isDark = useMemo(() => themeName === 'dark', [themeName]);
  const dispatch = useAppDispatch();

  const handleToggleTheme = () => {
    if (isDark) {
      dispatch(themeSlice.actions.lightTheme());
    } else {
      dispatch(themeSlice.actions.darkTheme());
    }
  };

  return {
    isDark,
    themeName: themeName,
    theme: theme,
    anyThem: anyThem,
    toggleTheme: handleToggleTheme,
  };
};
