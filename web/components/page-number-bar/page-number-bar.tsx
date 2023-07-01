import _ from "lodash";

import {NumberSquareButton} from "components/number-square-button/number-square-button";

import {generateSurroundingPageNumbers} from "lib/page-number-gen";

import "./page-number-bar.less";

export interface PageNumberBarProps
{
  currentPage:number
}

export function PageNumberBar(props:PageNumberBarProps):JSX.Element
{
  const surroundingNumbers:PageNumberGenResult=generateSurroundingPageNumbers(
    props.currentPage,
    {
      smallIncrement:1,
      smallAmount:3,

      largeIncrement:5,
      largeAmount:2
    }
  );

  /** render the surrounding pages */
  function r_pages(pageNumbers:number[]):JSX.Element[]
  {
    return _.map(pageNumbers,(page:number):JSX.Element=>{
      return <NumberSquareButton text={page.toString()} key={page}/>;
    });
  }

  return <div className="page-number-bar">
    {r_pages(surroundingNumbers.under)}
    <NumberSquareButton text={props.currentPage.toString()} selected/>
    {r_pages(surroundingNumbers.over)}
  </div>;
}