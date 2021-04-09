
import '../src/App.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'default',
    lightBackground: 'background',
    darkBackground: 'dark background',
    values: [
      {
        name: 'default',
        value: '#FFFFFF'
      },
      {
        name: 'background',
        value: '#f1f2f5'
      },
      {
        name: 'dark background',
        value: '#272c38'
      },
    ]
  }
}