import type {Meta,StoryObj} from "@storybook/react";

import {DropdownList,DropdownListProps} from "components/sort-dropdown/dropdown-list/dropdown-list";

type Story=StoryObj<DropdownListProps>;

const meta:Meta<DropdownListProps>={
  title:"dropdown list",
  component:DropdownList,
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