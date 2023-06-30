import _ from "lodash";

import "./dropdown-list.less";

export interface DropdownListProps
{
  items:DropdownOption[]

  onSelectItem?(value:string):void
}

export function DropdownList(props:DropdownListProps):JSX.Element
{
  return <div className="dropdown-list">
    {_.map(props.items,(item:DropdownOption,i:number):JSX.Element=>{
      /** clicked an item */
      function h_click():void
      {
        props.onSelectItem?.(item.value);
      }

      return <p key={item.value} onClick={h_click}>{item.text}</p>;
    })}
  </div>;
}