import _ from "lodash";

/** generate page numbers around the target page number */
export function generateSurroundingPageNumbers(
    currentPage:number,

    options:PageGenOptions
):PageNumberGenResult
{
    var under:number[]=[];
    var over:number[]=[];

    for (let i=1;i<=options.smallAmount;i++)
    {
        under.push(currentPage-(i*options.smallIncrement));
        over.push(currentPage+(i*options.smallIncrement));
    }

    for (let i=1;i<=options.largeAmount;i++)
    {
        under.push(currentPage-(i*options.largeIncrement));
        over.push(currentPage+(i*options.largeIncrement));
    }

    function rejectNegative(val:number):boolean
    {
        return val<=0;
    }

    under=_.reverse(_.reject(under,rejectNegative));
    over=_.reject(over,rejectNegative);

    return {
        under,
        over
    };
}