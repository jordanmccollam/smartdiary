import React from 'react';
import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {

  }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  kind: 'primary'
}
export const Ghost = Template.bind({})
Ghost.args = {
  kind: 'ghost'
}
export const Faded = Template.bind({})
Faded.args = {
  kind: 'faded'
}
export const Full = Template.bind({})
Full.args = {
  full: true
}

// DARK MODE
export const DarkModePrimary = Template.bind({})
DarkModePrimary.args = {
  kind: 'primary',
  darkMode: true
}
export const DarkModeGhost = Template.bind({})
DarkModeGhost.args = {
  kind: 'ghost',
  darkMode: true
}
export const DarkModeFaded = Template.bind({})
DarkModeFaded.args = {
  kind: 'faded',
  darkMode: true
}

