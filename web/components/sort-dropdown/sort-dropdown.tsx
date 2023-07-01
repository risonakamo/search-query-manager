import {useState,useEffect,useRef} from "react";
import cx,{Mapping} from "classnames";

import {DropdownList} from "./dropdown-list/dropdown-list";

import "./sort-dropdown.less";

export interface SortDropdownProps
{
  onSelectItem(value:string):void

  items:DropdownOption[]
}

export function SortDropdown(props:SortDropdownProps):JSX.Element
{
  const [listShowing,setListShowing]=useState<boolean>(false);

  /** clicked on selector field. toggle the list showing */
  function h_selectorFieldClick():void
  {
    setListShowing(!listShowing);
  }

  /** selected an item from the list. close the list, and trigger on select item event */
  function h_selectedItem(value:string):void
  {
    setListShowing(false);
    props.onSelectItem(value);
  }

  return <div className="sort-dropdown">
    <div className="selector-field" onClick={h_selectorFieldClick}>
      <p className="select-text">
        Date
      </p>
      <span className="material-symbols-outlined">
        arrow_drop_down
      </span>
    </div>

    <DropdownList items={props.items} showing={listShowing} onSelectItem={h_selectedItem}/>
  </div>;
}