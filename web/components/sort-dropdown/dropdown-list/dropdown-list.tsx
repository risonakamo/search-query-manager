import {useRef,useEffect,useInsertionEffect} from "react";
import _ from "lodash";
import cx,{Mapping} from "classnames";

import "./dropdown-list.less";

export interface DropdownListProps
{
  showing:boolean

  items:DropdownOption[]

  onSelectItem?(value:string):void
  onClickedOutside():void

  className?:string
}

export function DropdownList(props:DropdownListProps):JSX.Element
{
  const selfRef=useRef<HTMLDivElement>(null);

  const sync=useRef({
    showing:props.showing
  });
  sync.current={
    showing:props.showing
  };

  useEffect(()=>{
    document.addEventListener("click",(e:MouseEvent):void=>{
      console.log("huh",e.target);

      if (!sync.current.showing)
      {
        console.log("not showing");
        return;
      }

      // if showing, and clicked on something that is NOT inside of this element, or is this element,
      // then trigger clicked outside
      if (!(e.target && selfRef.current?.contains(e.target as HTMLElement)))
      {
        props.onClickedOutside();
      }
    });
  },[]);

  const topcx:Mapping={
    hidden:!props.showing
  };

  return <div className={cx("dropdown-list",props.className,topcx)} ref={selfRef}>
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