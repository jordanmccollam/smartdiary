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
        {keyLabel: "energy", keyValue: "3"},
        {keyLabel: "pleasantness", keyValue: "8"},
      ],
      amt: parseInt(moment("5/09/2021").format('YYYYMMDD'))
    },
    {
      label: "5/10/2021",
      keys: [
        {keyLabel: "energy", keyValue: "8"},
        {keyLabel: "pleasantness", keyValue: "3"},
      ],
      amt: parseInt(moment("5/10/2021").format('YYYYMMDD'))
    },
  ],
}

