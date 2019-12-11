# TbcLib - The Big Crunch Libraries

TbcLib is a collection of functions that can be used for working with arrays, dates, content formatting, color and dom manipulation, custom mathematical formulae. These are accessible from vizzies and formulae cells in The Big Crunch.

## How to Use

In your vizzy code, add a script tag as follows:
```
<script src="/tbc_lib.js"></script>
```

To use the **isEmpty()** function from *std.js*, use the following syntax:
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

### Date:

### DOM:

### Formatting:

### Math:

### Std:


## TODO

- Add CDN URL
- To build run `npx webpack`