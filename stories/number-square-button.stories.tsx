import type {Meta,StoryObj} from "@storybook/react";

import {NumberSquareButton,
  NumberSquareButtonProps} from "components/number-square-button/number-square-button";

type Story=StoryObj<NumberSquareButtonProps>;

const meta:Meta<NumberSquareButtonProps>={
  title:"number square button",
  component:NumberSquareButton,
  args:{
    text:"4"
  }
};
export default meta;

export const normal:Story={

};

export const normal2:Story={
  args:{
    text:"100"
  }
};

export const selected:Story={
  args:{
    text:"5",
    selected:true
  }
};