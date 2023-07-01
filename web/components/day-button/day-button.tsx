import "./day-button.less";

export interface DayButtonProps
{

}

export function DayButton(props:DayButtonProps):JSX.Element
{
  return <div className="day-button">
    <div className="button-zone">
      <h1>6/18</h1>
      <h2>2023</h2>
    </div>

    <div className="info-zone">
      <p className="open-count">43</p>
      <p className="last-open">6/18</p>
    </div>
  </div>;
}