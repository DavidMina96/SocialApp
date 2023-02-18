import {extendTheme} from 'native-base';

export const nativeBaseTheme = extendTheme({
  colors: {
    primary: {
      '400': '#38bdf8',
    },
    secondary: {
      '100': '#fef9c3',
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: 'black',
      },
    },
  },
});
