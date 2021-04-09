import React from 'react';
import Entry from './Entry';

export default {
  title: 'components/Entry',
  component: Entry,
  argTypes: {

  }
}

const Template = (args) => <Entry {...args} />

export const Default = Template.bind({})
Default.args = {

}

