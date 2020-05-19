//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (color1, color2) => {
  var colors = ["black","brown","red","orange","yellow","greene","blue","violet","grey","white"];
  var color;
  for (color in colors){
    var band1 = colors.search(color1);
    var band2 = colors.search(color2);
    return +colors.indexOf(band1) + +colors.indexOf(band2);
  }

};
