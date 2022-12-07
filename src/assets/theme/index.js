import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    red: '#FA1407',
    purple: '#A45EFF',
    blue: '#66A1FF',
    dark: '#5C5C5C',
    white: "#F5F5F5",
  },
  typography: {
    fontSize: 16,
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 20,
    },
    h3: {
      fontSize: 16,
    },
    text: {
      fontSize: 18,
    },
    small: {
      fontSize: 14,
    },
    title: {
      fontSize: 55,
    }
  },
};

export default theme;
