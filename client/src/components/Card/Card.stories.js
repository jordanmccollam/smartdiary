import React from 'react';
import Card from './Card';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {

  }
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {

}

export const WithContent = Template.bind({})
WithContent.args = {
  children: <div>Hic temporibus eligendi et dolorem illo. Adipisci sed quia quod et iste incidunt asperiores id consequatur. Veritatis facere et repellat.</div>
}

export const DarkMode = Template.bind({})
DarkMode.args = {
  children: <div>Hic temporibus eligendi et dolorem illo. Adipisci sed quia quod et iste incidunt asperiores id consequatur. Veritatis facere et repellat.</div>,
  darkMode: true
}

