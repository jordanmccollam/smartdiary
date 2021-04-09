import React from 'react';
import Diary from './Diary';

export default {
  title: 'screens/Diary',
  component: Diary,
  argTypes: {

  }
}

const Template = (args) => <Diary {...args} />

export const Default = Template.bind({})
Default.args = {

}
export const DarkMode = Template.bind({})
DarkMode.args = {
  darkMode: true
}

