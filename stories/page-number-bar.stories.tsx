import type {Meta,StoryObj} from "@storybook/react";

import {PageNumberBar,PageNumberBarProps} from "components/page-number-bar/page-number-bar";

type Story=StoryObj<PageNumberBarProps>;

const meta:Meta<PageNumberBarProps>={
  title:"page number bar",
  component:PageNumberBar,
  args:{
    currentPage:1
  }
};
export default meta;

export const normal:Story={

};

export const normal2:Story={
  args:{
    currentPage:10
  }
};

export const normal3:Story={
  args:{
    currentPage:100
  }
};

export const normal4:Story={
  args:{
    currentPage:212
  }
};

export const normal5:Story={
  args:{
    currentPage:1026
  }
};