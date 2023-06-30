import "./sort-dropdown.less";

export interface SortDropdownProps
{

}

export function SortDropdown(props:SortDropdownProps):JSX.Element
{
  return <div className="sort-dropdown">
    <div className="selector-field">
      <p className="select-text">
        Date
      </p>
      <span className="material-symbols-outlined">
        arrow_drop_down
      </span>
    </div>
  </div>;
}