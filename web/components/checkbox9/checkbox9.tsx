import "./checkbox9.less";

export interface Checkbox9Props
{
  text:string
}

export function Checkbox9(props:Checkbox9Props):JSX.Element
{
  return <div className="checkbox9">
    <input type="checkbox"/> {props.text}
  </div>;
}