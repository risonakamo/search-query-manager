import type {Meta,StoryObj} from "@storybook/react";

import {SortDropdown,SortDropdownProps} from "components/sort-dropdown/sort-dropdown";

type Story=StoryObj<SortDropdownProps>;

const meta:Meta<SortDropdownProps>={
  title:"sort dropdown/sort dropdown",
  component:SortDropdown,
  args:{
    items:[
      {
        text:"item 1",
        value:"1"
      },
      {
        text:"item 2",
        value:"2"
      },
      {
        text:"really long value maybe?",
        value:"3"
      }
    ]
  },
  argTypes:{
    onSelectItem:{
      action:"selected item"
    }
  }
};
export default meta;

export const normal:Story={

};