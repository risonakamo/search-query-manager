import type {Meta,StoryObj} from "@storybook/react";

import {Checkbox9,Checkbox9Props} from "components/checkbox9/checkbox9";

type Story=StoryObj<Checkbox9Props>;

const meta:Meta<Checkbox9Props>={
  title:"custom checkbox",
  component:Checkbox9,
  args:{
    text:"text or something"
  }
};
export default meta;

export const normal:Story={

};