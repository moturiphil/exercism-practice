/*
const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
]

export const decodedValue = (colors) => {
  return Number(`${COLORS.indexOf(colors[0])}${COLORS.indexOf(colors[1])}`);
};


*****************************************************************************************
**************************************************************************
*****************************************************************


export const decodedValue = (array) => {
  let resultArray = [];

  array.slice(0, 2).forEach((element) => {
    let code = resistorColorCodes.indexOf(element);
    resultArray.push(code);
  });
  return Number(resultArray.join(""));
};

const resistorColorCodes = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];


*****************************************************************************************
**************************************************************************
*****************************************************************
*/

export const decodedValue = (arr) => {
  return Number('' + COLORS.indexOf(arr[0]) + COLORS.indexOf(arr[1]));
};

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
