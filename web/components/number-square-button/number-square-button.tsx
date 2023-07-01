import cx,{Mapping} from "classnames";

import "./number-square-button.less";

export interface NumberSquareButtonProps
{
  text:string
  selected:boolean
}

export function NumberSquareButton(props:NumberSquareButtonProps):JSX.Element
{
  const topcx:Mapping={
    normal:!props.selected,
    selected:props.selected
  };

  return <div className={cx("number-square-button",topcx)}>
    {props.text}
  </div>;
}