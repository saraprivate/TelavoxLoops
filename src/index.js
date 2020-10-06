import {
  render,
  callMethodForEveryBoxOneSecondApart,
  callMethodInXMilliSeconds,
  callMethodToRenderOneSecondApartWithCondition,
  createBoxRow,
  createBoxMatrix
} from "./renderUtils.js";
import {
  //Here you can see some examples of colors to choose
  //https://www.quackit.com/css/css_color_codes.cfm
  changeColorOfBox,
  boxIsOfColor,
  makeBoxVisible,
  makeBoxInVisible
} from "./boxUtils.js";

//Uncomment this row below if you want a single row to be shown
var boxes = createBoxRow(10);

//Uncomment this row below if you want a matrix to be shown
//var boxes = createBoxMatrix(10);

/*
    Insert your own code here! 
*/

render(boxes);

/*
//This can be used as more advanced examples
//callMethodForEveryBoxOneSecondApart(myFunction, boxes);
//callMethodToRenderOneSecondApartWithCondition(myFunction, myFunction2, myConditions, boxes);

function myFunction(box) {
  changeColorOfBox(box, "darkblue");
}

function myFunction2(box) {
  changeColorOfBox(box, "lightpink");
}

function myConditions(i, j, boxes) {
  return (
    ((i === 2 || i === 3) && j > 1 && j < 8) ||
    (i > 1 && i < 8 && j > 3 && j < 6)
  );
}*/
