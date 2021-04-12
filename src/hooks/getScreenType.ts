import { useMediaQuery } from 'react-responsive';

export type ScreenType = 'desktop' | 'tablet' | 'mobile';

export const useScreenType = (): ScreenType => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 1265 });
  const isMobile = useMediaQuery({ minWidth: 800 });

  if (isDesktop) return 'desktop';

  if (isTablet) return 'tablet';

  if (isMobile) return 'mobile';

  return 'mobile';
};
