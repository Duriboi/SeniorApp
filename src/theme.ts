export const theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    tertiary: '#FF2D55',
    background: '#F2F2F7',
    surface: '#FFFFFF',
    text: '#000000',
    textSecondary: '#8E8E93',
    outline: '#C7C7CC',
    success: '#34C759',
    error: '#FF3B30',
    info: '#5AC8FA',
    warning: '#FFCC00',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    full: 9999,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: '800' as const,
    },
    h2: {
      fontSize: 24,
      fontWeight: '700' as const,
    },
    h3: {
      fontSize: 20,
      fontWeight: '700' as const,
    },
    body: {
      fontSize: 16,
      fontWeight: '400' as const,
    },
    bodyBold: {
      fontSize: 16,
      fontWeight: '600' as const,
    },
    caption: {
      fontSize: 14,
      fontWeight: '400' as const,
    },
  },
};
