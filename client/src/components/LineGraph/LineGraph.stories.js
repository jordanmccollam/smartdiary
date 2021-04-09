import React from 'react';
import LineGraph from './LineGraph';
import moment from 'moment';

export default {
  title: 'components/LineGraph',
  component: LineGraph,
  argTypes: {

  }
}

const Template = (args) => <LineGraph {...args} />

export const Default = Template.bind({})
Default.args = {

}
export const WithData = Template.bind({})
WithData.args = {
  data: [
    {
      label: "5/09/2021",
      keys: [
        {keyLabel: "energy", keyValue: "3", lightColor: '#308d45', darkColor: '#308d45'},
        {keyLabel: "pleasantness", keyValue: "8", lightColor: '#004288', darkColor: '#cb6d56'},
      ],
      amt: parseInt(moment("5/09/2021").format('YYYYMMDD'))
    },
    {
      label: "5/10/2021",
      keys: [
        {keyLabel: "energy", keyValue: "8", lightColor: '#308d45', darkColor: '#308d45'},
        {keyLabel: "pleasantness", keyValue: "3", lightColor: '#004288', darkColor: '#cb6d56'},
      ],
      amt: parseInt(moment("5/10/2021").format('YYYYMMDD'))
    },
  ],
}

