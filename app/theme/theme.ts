import { ThemeConfig } from 'antd';
import { ButtonProps } from 'antd/es/button';

type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
  Button?: ButtonProps;
  Text: {
    heroColor: string;
  };
};

export const theme: ThemeData = {
  borderRadius: 12,
  colorPrimary: '#00B96B',
  Text: {
    heroColor: '#00B96B',
  },
  Button: {
    color: '#00B96B',
    style: { height: '2rem' },
  },
};

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: theme.colorPrimary,
    borderRadius: theme.borderRadius,
  },
  components: {
    Button: {
      colorPrimary: theme.Button?.color,
      padding: 18,
      colorLink: theme.colorPrimary,
      controlHeight: 42,
    },
  },
};
