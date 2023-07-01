import "./fat-button.less";

export interface FatButtonProps
{
  text:string
}

export function FatButton(props:FatButtonProps):JSX.Element
{
  return <div className="fat-button">
    {props.text}
  </div>;
}