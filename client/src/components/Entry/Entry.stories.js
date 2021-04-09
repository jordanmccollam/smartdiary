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
export const WithActions = Template.bind({})
WithActions.args = {
  edit: () => console.log("Entry:: Edit"),
  delete: () => console.log("Entry:: Delete")
}

