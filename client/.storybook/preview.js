
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
    appBackground: 'background',
    values: [
      {
        name: 'default',
        value: '#FFFFFF'
      },
      {
        name: 'background',
        value: '#f1f2f5'
      },
    ]
  }
}