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
export const Full = Template.bind({})
Full.args = {
  full: true
}

