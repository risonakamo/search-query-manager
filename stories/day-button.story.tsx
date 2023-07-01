import type {Meta,StoryObj} from "@storybook/react";

import {DayButton,DayButtonProps} from "components/day-button/day-button";

type Story=StoryObj<DayButtonProps>;

const meta:Meta<DayButtonProps>={
  title:"day button",
  component:DayButton,
  args:{

  }
};
export default meta;

export const normal:Story={

};