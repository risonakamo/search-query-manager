import type {Meta,StoryObj} from "@storybook/react";

import {SortDropdown,SortDropdownProps} from "components/sort-dropdown/sort-dropdown";

type Story=StoryObj<SortDropdownProps>;

const meta:Meta<SortDropdownProps>={
  title:"sort dropdown",
  component:SortDropdown,
  args:{

  }
};
export default meta;

export const normal:Story={

};