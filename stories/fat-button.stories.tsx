import type {Meta,StoryObj} from "@storybook/react";

import {FatButton,FatButtonProps} from "components/fat-button/fat-button";

type Story=StoryObj<FatButtonProps>;

const meta:Meta<FatButtonProps>={
  title:"fat button",
  component:FatButton,
  args:{
    text:"Search"
  }
};
export default meta;

export const normal:Story={

};

export const normal2:Story={
  args:{
    text:"Save"
  }
};

export const normal3:Story={
  args:{
    text:"Import"
  }
};