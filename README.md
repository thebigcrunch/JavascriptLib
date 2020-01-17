# TbcLib - The Big Crunch Libraries

TbcLib is a collection of functions that can be used for working with arrays, dates, content formatting, color and dom manipulation, custom mathematical formulae. These are accessible from vizzies and formulae cells in The Big Crunch.

## How to Use

In your vizzy code, add a script tag as follows:
```
<script src="/tbc_lib.js"></script>
```

To use the **isEmpty()** function from **std.js**, use the following syntax:
```
if(TbcLib.std.isEmpty(value)){
    return "Empty Value";
}
else{
    return value;
}
```

To set the background image for the html page, the syntax is:
```
TbcLib.dom.setBackgroundImage(imagePath);
```

## The Libraries Explained

### Array:
        
| Function | Description | Parameters | Return Value |
| -------- | ----------- | ---------- | ------------ |
| getValidRowsFromArray | Gets an array of rows from an input array after checking whether the specified column of the row is not null or empty | inputArray, columnIndex (0 by default) | array | 
| getColumnFromArray | Extracts the specified column from an array | inputArray, columnIndex | array |
| getMaxValueFromArray | Gets the largest value from an array. In case of 2 dimensional arrays, largest value of the specified column is returned | inputArray, columnIndex (0 by default) | number |
| getMinValueFromArray | Gets the smallest value from an array. In case of 2 dimensional arrays, smallest value of the specified column is returned | inputArray, columnIndex (0 by default) | number |
| getNumbersBetweenMinMaxValues | Returns an array of consecutive numbers from a starting number to an ending number | minValue, maxValue | array |
| getNumbersByStepBetweenMinMaxValues | Returns an array of numbers from a starting number to an ending number incremented by the specified step value | minValue, maxValue, step | array |
| flipData | Converts the columns of an input array into rows and rows into columns. Similar to the excel transpose function | inputArray | array |
| arrayContainsOnlyNumbers | Checks if an array contains only numbers. In case of 2 dimensional arrays, the values of the specified column are checked | inputArray,  columnIndex (0 by default) | true or false |
| parseNumbersInColumn | Loops through the values of a one dimensional array and converts the non date, non string values to valid number format | singleDimensionArray | null |
| getValidColumnData | Removes the trailing null values from an input array | singleDimensionArray | null |
|generateErrorsForDataArray | If a single dimensional array contains non-numeric values returns an error object | array | errors object with appropriate message for each invalid entry |

### Color:

| Function | Description | Parameters | Return Value |
| -------- | ----------- | ---------- | ------------ |
| hexToRgb | Converts a hexadecimal color to rgb format | hexadecimal color (e.g. #02d3af or #03f) |  object in rgb format {r, g, b} or null | 
| getFullFormHex | Converts a 3 char shorthand hex color code or 6 char code | hexadecimal color string of 3 or 6 characters (e.g. #02d3af or #03f) | hexadecimal color string of 6 characters (e.g. #0033ff)
| getInterpolatedColors | Returns an array of n colors between a start color and an end color | n => specifed by the input parameter *steps*; start color => color1; end color => color2 | array |
| getIconColor | Converts an input color and into the appropriate css properties to be applied to a grayscale image or icon | hexadecimal color (e.g. #02d3af or #03f) | css property in string format |
| blendColors | Gets an input array of rgb colors, mixes them and returns the blended rgba color | array of rgb colors (e.g. [[r,g,b], [r,g,b]]) | array with format: [r, g, b, a] |
| getColorBrightness | This function is used to determine how bright or dark a color is | hexadecimal color (e.g. #02d3af or #03f) | a value between 0 and 255, 0 being the darkest and 255 being the lightest |
| randomColor | Generates an array of specified number of colors based on a base input color | object representing the color to be used as base and the number of random colors to be generated {hue: "#fec600", count: 1} | array of generated colors in hex format |

### Date:

| Function | Description | Parameters | Return Value |
| -------- | ----------- | ---------- | ------------ |
| parseDate | Checks if an input value is a valid date string | string | valid date string or null |

### DOM:

| Function | Description | Parameters | Return Value |
| -------- | ----------- | ---------- | ------------ |
| setBackgroundImage | Sets the bacckground image of the body tag to input image | image url | null |

### Formatting:

| Function | Description | Parameters | Return Value |
| -------- | ----------- | ---------- | ------------ |
| getUnit | Decides if a unit is to be added before or after a value | input unit | object of type {prefix: "" suffix: ""} |
| formatLabel | Checks if the input label is a valid number, uses the getUnit function and appends the unit to the label in the appropriate position | label, unit | returns label as it is if it is non-numeric; in case of numbers returns the label along with unit as a prefix or a suffix (e.g. $100 or 100 USD) |
| getAxisTickLabels | Decides the number of tick labels to be shown on an axis, and the length of each displayed tick label. If the number of ticks are greater than 25, a maximum of 20 tick labels are only displayed. Each displayed label is truncated after 15 characters in mobile devices and 30 characters in wide screens | data object containing arrray of tick labels | null |

### Math:

| Function | Description | Parameters | Return Value |
| -------- | ----------- | ---------- | ------------ |
| isNumberToBeFormatted | When numbers are to be comma-separated, in some case years like 1990, 2020 are inadverdently displayed as 1,990 and 2,020. To avoid this, the numbers upto 9999 (the biggest 4 digit number) are not fomatted with commas. This function checks if the maximum value in an array is greater than 9999. | true if maximum number is greater than 9999 else false |

### Std:

| Function | Description | Parameters | Return Value |
| -------- | ----------- | ---------- | ------------ |
| isEmpty | Checks if an input is either undefined or null or empty | input value | true or false |
| isiOS | Checks if the device if iOS | null | true or false |


## TODO

- Add CDN URL
- To build run `npx webpack`