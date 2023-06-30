import {useState,useEffect,useRef} from "react";
import cx,{Mapping} from "classnames";

import {DropdownList} from "./dropdown-list/dropdown-list";

import "./sort-dropdown.less";

export interface SortDropdownProps
{

}

export function SortDropdown(props:SortDropdownProps):JSX.Element
{
  const [listShowing,setListShowing]=useState<boolean>(false);

  /** clicked on selector field. toggle the list showing */
  function h_selectorFieldClick():void
  {
    setListShowing(!listShowing);
  }

  function h_clickedOutside():void
  {
    setListShowing(false);
  }

  const items:DropdownOption[]=[
    {
      text:"item 1",
      value:"1"
    },
    {
      text:"item 2",
      value:"2"
    },
    {
      text:"really long value maybe?",
      value:"3"
    }
  ];

  return <div className="sort-dropdown">
    <div className="selector-field" onClick={h_selectorFieldClick}>
      <p className="select-text">
        Date
      </p>
      <span className="material-symbols-outlined">
        arrow_drop_down
      </span>
    </div>

    <DropdownList items={items} showing={listShowing} onClickedOutside={h_clickedOutside}/>
  </div>;
}