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
        
| Function | Description | Inputs | 
| -------- | ----------- | ------ | 
| getValidRowsFromArray | Returns an array of rows from an input array after checking whether the specified column of the row is not null or empty | inputArray, columnIndex (0 by default) | 
| getColumnFromArray | Extracts a column from an array and returns it | inputArray, columnIndex |

### Color:

| Function | Description | Inputs | 
| -------- | ----------- | ------ | 
| hexToRgb | Converts a hexadecimal color to rgb format, and returns it as object {r, g, b} | hexadecimal color (e.g. #02d3af or #03f) | 
| getFullFormHex | Converts a 3 char shorthand hex color code or 6 char code | hexadecimal color (e.g. #02d3af or #03f) |
| getInterpolatedColors | Returns an array of n colors between a start color and an end color | n => specifed by the input parameter *steps*; start color => color1; end color => color2 |
| getIconColor | Gets an input color and returns the appropriate css properties to apply that color to an image or icon | hexadecimal color (e.g. #02d3af or #03f) |
| blendColors | Gets an input array of rgb colors, mixes them and returns the blended rgba color (format: [r, g, b, a]) | array of rgb colors (e.g. [[r,g,b], [r,g,b]]) | 
| getColorBrightness | This function is used to determine how bright or dark a color is. It returns a value between 0 and 255, 0 being the darkest and 255 being the lightest | hexadecimal color (e.g. #02d3af or #03f) |

### Date:

### DOM:

### Formatting:

### Math:

### Std:


## TODO

- Add CDN URL
- To build run `npx webpack`